import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY);

const WEBSITE_HOST = process.env.NEXT_PUBLIC_WEBSITE_HOST;
const PAYMENT_SUCCESS_PATH = '/success';
const PAYMENT_CANCEL_PATH = '/';

export async function initCheckout({ lineItems } = {}) {
  const errorBase = 'Failed to initiate checkout';

  if ( !Array.isArray(lineItems) ) {
    throw new Error(`${errorBase}: lineItems is not an array`);
  }

  const stripe = await stripePromise;

  const { error } = await stripe.redirectToCheckout({
    mode: 'payment',
    lineItems,
    shippingAddressCollection: {
      allowedCountries: ["AU"],
  },
    allow_promotion_codes: true,
    successUrl: `${WEBSITE_HOST}${PAYMENT_SUCCESS_PATH}?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: `${WEBSITE_HOST}${PAYMENT_CANCEL_PATH}`,
  });

  if ( error ) {
    throw new Error(error);
  }

}