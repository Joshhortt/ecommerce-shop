import Stripe from 'stripe';

// Getting the API Key: https://stripe.com/en-br

const stripe = new Stripe(process.env.
    NEXT_PUBLIC_STRIPE_SECRET_KEY);

    export default async function handler(req, res){
        if(req.method === POST) {
            
        }
    }