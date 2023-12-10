import { Injectable } from '@angular/core';

declare var Stripe: any;

@Injectable({
  providedIn: 'root'
})
export class StripeService {

  private stripe = Stripe('pk_live_51OLLkpKI6ZMXj3BqWmFcHSLXKVYpYfKe8OP67RU4avBfju0gJUxYrfZNcrjzjgiQl2GrhzOSTjPzdwOYQEQG1WTM00Z4ENJ8LG');

  async mockTransaction(amount: number) {
    try {
      const paymentIntent = await this.stripe.paymentIntents.create({
        amount,
        currency: 'usd',
        payment_method: 'pm_card_visa', // Use a test card token
        confirmation_method: 'manual',
      });

      // Handle the paymentIntent as needed
      console.log(paymentIntent);
      return paymentIntent;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

}
