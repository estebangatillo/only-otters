const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

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
  const { color, size, variantId } = session.metadata;

  if (!variantId) {
    console.error('No variantId in metadata');
    return { statusCode: 200, body: 'No variantId' };
  }

  const addr = session.shipping_details?.address || session.customer_details?.address;
  const name = session.shipping_details?.name || session.customer_details?.name;

  const pfResponse = await fetch('https://api.printful.com/orders', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.PRINTFUL_API_TOKEN}`,
      'X-PF-Store-Id': process.env.PRINTFUL_STORE_ID,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      confirm: true,
      recipient: {
        name,
        address1: addr.line1,
        address2: addr.line2 || '',
        city: addr.city,
        state_code: addr.state,
        country_code: addr.country,
        zip: addr.postal_code,
        email: session.customer_details?.email,
      },
      items: [{ sync_variant_id: parseInt(variantId), quantity: 1 }],
    }),
  });

  const pfResult = await pfResponse.json();

  if (!pfResponse.ok) {
    console.error('Printful error:', JSON.stringify(pfResult));
    return { statusCode: 500, body: 'Printful order failed: ' + JSON.stringify(pfResult) };
  }

  console.log('Printful order created:', pfResult.result.id);
  return { statusCode: 200, body: 'OK' };
};