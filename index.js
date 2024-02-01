const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');

require('dotenv').config()

const app = express()

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('../trading/build'));


const stripe = require('./routers/stripe');
app.use('/stripe', stripe);

app.listen(process.env.PORT, () => {
  console.log(`Stripe API listening on port ${process.env.PORT}`)
})