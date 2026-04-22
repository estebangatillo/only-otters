const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const VARIANT_MAP = {
  'tshirt-Cardinal-S':  5270164594,
  'tshirt-Cardinal-M':  5270164595,
  'tshirt-Cardinal-L':  5270164596,
  'tshirt-Cardinal-XL': 5270164597,
  'tshirt-Kelly-S':     5270164620,
  'tshirt-Kelly-M':     5270164621,
  'tshirt-Kelly-L':     5270164622,
  'tshirt-Kelly-XL':    5270164623,
  'tshirt-White-S':     5270164651,
  'tshirt-White-M':     5270164652,
  'tshirt-White-L':     5270164653,
  'tshirt-White-XL':    5270164654,
  'tote-Oyster-One size': 5270158937,
  'tote-Black-One size':  5270158936,
};

exports.handler = async (event) => {
  const sig = event.headers['stripe-signature'];
  let stripeEvent;

  try {
    stripeEvent = stripe.webhooks.constructEvent(
      event.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return { statusCode: 400, body: `Webhook Error: ${err.message}` };
  }

  if (stripeEvent.type !== 'checkout.session.completed') {
    return { statusCode: 200, body: 'Ignored' };
  }

  const session = stripeEvent.data.object;
  const { product, color, size } = session.metadata;
  const key = `${product}-${color}-${size}`;
  const variantId = VARIANT_MAP[key];

  if (!variantId) {
    console.error('No variant found for key:', key);
    return { statusCode: 200, body: 'No variant match' };
  }

  const addr = session.shipping_details?.address || session.customer_details?.address;
  const name = session.shipping_details?.name   || session.customer_details?.name;

  const pfResponse = await fetch('https://api.printful.com/orders', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.PRINTFUL_API_TOKEN}`,
      'X-PF-Store-Id': process.env.PRINTFUL_STORE_ID,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      external_id: session.id,
      recipient: {
        name,
        address1:     addr.line1,
        address2:     addr.line2 || '',
        city:         addr.city,
        state_code:   addr.state,
        country_code: addr.country,
        zip:          addr.postal_code,
        email:        session.customer_details?.email,
      },
      items: [{ sync_variant_id: variantId, quantity: 1 }],
    }),
  });

  const pfResult = await pfResponse.json();
if (!pfResponse.ok) {
    console.error('Printful error status:', pfResponse.status);
    console.error('Printful error body:', JSON.stringify(pfResult));
    return { statusCode: 500, body: 'Printful order failed: ' + JSON.stringify(pfResult) };
  }

  console.log('Printful order created:', pfResult.result.id);
  return { statusCode: 200, body: 'OK' };
};