import { GraphQLClient } from 'graphql-request'

export const client = new GraphQLClient(process.env.SHOPIFY_STORE_LINK!, {
    headers: {
      "X-Shopify-Access-Token": process.env.SHOPIFY_ACCESS_TOKEN!,
    },
  })