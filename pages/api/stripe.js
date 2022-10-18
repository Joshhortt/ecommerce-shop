// Getting the API Key: https://stripe.com/en-br 
// Accept online payments:  https://stripe.com/docs/payments
// Getting there:  https://stripe.com/docs/checkout/quickstart
// Choosing the prebuilt checkout page with front-end framework
// https://stripe.com/docs/checkout/quickstart?client=next or 
// https://stripe.com/docs/checkout/quickstart?client=react

import Stripe from 'stripe';

    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
        const params = {

            submit_type: 'pay',
            mode: 'payment',
            payment_method_types: ['card'],
            billing_address_collection: 'auto',
            shipping_options: [
              // Create shipping rate: https://dashboard.stripe.com/test/shipping-rates
              { shipping_rate: 'shr_1LuKXCJdncuvx1yGEiofdHxm' },
              { shipping_rate: 'shr_1LuKltJdncuvx1yGuhefw5SD' },
              
            ],

            line_items: [
              {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price: '{{PRICE_ID}}',
                quantity: 1,
              },
            ],
            mode: 'payment',
            success_url: `${req.headers.origin}/?success=true`,
            cancel_url: `${req.headers.origin}/?canceled=true`,
          }

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create();
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}