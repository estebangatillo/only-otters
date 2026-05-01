const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const ALLOWED_PRICE_IDS = [
  'price_1TNjPBRywbMDnJmpzx2UmLse',
  'price_1TRHzkRywbMDnJmpfWdLqWwv',
  'price_1TNlT8RywbMDnJmpJ4fHKHOs',
];

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  const { product, color, size, priceId, variantId } = JSON.parse(event.body);

  if (!ALLOWED_PRICE_IDS.includes(priceId)) {
    return { statusCode: 400, body: 'Invalid price ID' };
  }

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{ price: priceId, quantity: 1 }],
    metadata: { product, color, size: size || 'One Size', variantId: String(variantId) },
    shipping_address_collection: {
      allowed_countries: ['US', 'CA', 'GB', 'AU'],
    },
    phone_number_collection: {
      enabled: true,
    },
    success_url: 'https://only-otters.com/success.html',
    cancel_url: 'https://only-otters.com/shop.html',
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ url: session.url }),
  };
};