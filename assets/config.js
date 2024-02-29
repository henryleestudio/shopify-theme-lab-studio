const Shopify = require(`shopify-api-node`)
require(`dotenv`).config()

const shopify = new Shopify({
    shopName: process.env.shopName,
    apiKey: process.env.apiKey,
    accessToken: process.env.password
  });