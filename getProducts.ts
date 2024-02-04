import { client } from "./graphql";
import { gql } from "graphql-request";
const getProductsquery = gql`
  {
    products (first: 10) {
      edges {
        node {
          id
          bodyHtml
          images (first: 1){
            nodes {
              src
            }
          }
        }
      }
    }
  }
`
export async function getProducts() {
    return await client.request(getProductsquery);
  }