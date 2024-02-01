const express = require('express');
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_API_PRIVATE_KEY);

// REQUEST POST: localhost:8085/stripe/create-payment-link
// example body:
//
// {
//     "amount": "10000",
//     "currency": "usd"
// }
// Echivalent 100 Dolari

router.post('/create-payment-link', async (req,res) => {
    try {
        const { amount, currency } = req.body;

        // Create a Checkout Session
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          line_items: [
            {
              price_data: {
                currency,
                product_data: {
                  name: "Your payment is ready",
                },
                unit_amount_decimal: amount,
              },
              quantity: 1,
            },
          ],
          mode: 'payment',
          success_url: 'http://localhost:4200/home',
          cancel_url: 'http://localhost:4200/payment',
        });

        // Send the hosted payment link as a response
        res.json({ paymentLink: session.url });


      } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
      }
})

module.exports = router;