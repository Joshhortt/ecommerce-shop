// Getting the API Key: https://stripe.com/en-br 
// Accept online payments:  https://stripe.com/docs/payments
// Getting there:  https://stripe.com/docs/checkout/quickstart
// Choosing the prebuilt checkout page with front-end framework
// https://stripe.com/docs/checkout/quickstart?client=next or 
// https://stripe.com/docs/checkout/quickstart?client=react

import Stripe from 'stripe';
    // const stripe = require('stripe')('sk_test_7SDS5JtA19kE6fk26j2P2DBq');
    // const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    // const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
export default async function handler(req, res) {
  if (req.method === 'POST') {

console.log(req.body)

    try {
        const params = {

            submit_type: 'pay',
            mode: 'payment',
            payment_method_types: ['card'],
            billing_address_collection: 'auto',
            shipping_options: [
              // Create shipping rate: https://dashboard.stripe.com/test/shipping-rates
              
              { shipping_rate: 'shr_1LvmCjAESr2QMsNCLwfpEy5Y' },
              // { shipping_rate: 'shr_1LuKXCJdncuvx1yGEiofdHxm' },
              // { shipping_rate: 'shr_1LuKltJdncuvx1yGuhefw5SD' },
            ],

                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                line_items: req.body.map(item => {
                  const img = item.image[0].asset._ref
                  const newImage = img
                    .replace(
                      'image-',
                      'https://cdn.sanity.io/images/v4cnrndi/production/'
                    )
                    .replace('-webp', '.webp')
        
                  return {
                    price_data: {
                      currency: 'eur',
                      product_data: {
                        name: item.name,
                        images: [newImage],
                      },
                      unit_amount: item.price * 100,
                    },
                    adjustable_quantity: {
                      enabled: true,
                      minimum: 1,
                    },
                    quantity: item.quantity,
                  }
                }),
            success_url: `${req.headers.origin}/?success=true`,
            cancel_url: `${req.headers.origin}/?canceled=true`,
          }

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      // res.redirect(303, session.url);
      res.status(200).json(session)
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}