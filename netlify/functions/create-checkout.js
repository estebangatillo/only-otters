const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const TEE_PRICE_ID  = 'price_1TNjPBRywbMDnJmpzx2UmLse';
const TOTE_PRICE_ID = 'price_1TNlT8RywbMDnJmpJ4fHKHOse';

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  const { product, color, size } = JSON.parse(event.body);
  const priceId = product === 'tote' ? TOTE_PRICE_ID : TEE_PRICE_ID;

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{ price: priceId, quantity: 1 }],
    metadata: { product, color, size: size || 'One size' },
    shipping_address_collection: {
      allowed_countries: ['US', 'CA', 'GB', 'AU'],
    },
    success_url: 'https://only-otters.com/success.html',
    cancel_url:  'https://only-otters.com/shop.html',
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ url: session.url }),
  };
};