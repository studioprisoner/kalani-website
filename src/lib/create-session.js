const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_API_KEY);

const WEBSITE_HOST = process.env.NEXT_PUBLIC_WEBSITE_HOST;
const PAYMENT_SUCCESS_PATH = "/success";
const PAYMENT_CANCEL_PATH = "/";

const validateCartItems =
  require("use-shopping-cart/utilities").validateCartItems;

const inventory = require("./data/products.json");

exports.handler = async (event) => {
  let product;
  try {
    prodcut = JSON.parse(event.body);
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Received malformed JSON.",
        error: error.message,
      }),
    };
  }

  let line_items;
  try {
    line_items = validateCartItems(invetory, product);
  } catch (error) {
    return {
      statusCode: 422,
      body: JSON.stringify({
        message: "Some of the items in your cart art invalid.",
        error: error.message,
      }),
    };
  }

  let session;
  try {
    session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_address_collection: {
        allowed_countries: ["AUD"],
      },
      mode: "payment",
      allow_promotion_codes: true,
      success_url: `${WEBSITE_HOST}${PAYMENT_SUCCESS_PATH}`,
      cancel_url: `${WEBSITE_HOST}${PAYMENT_CANCEL_PATH}`,
      line_items,
    });
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "While communicating with Strupe, we encounted an error.",
        error: error.message,
      }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ sessionID: session.id }),
  };
};
