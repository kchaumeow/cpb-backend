import { client } from "../graphql";
import { gql } from "graphql-request";
import { ProductDTO } from "../types";
const getProductsquery = gql`
  {
    products(first: 4) {
      edges {
        node {
          id
          bodyHtml
          images(first: 2) {
            nodes {
              src
            }
          }
        }
      }
    }
  }
`;
export async function getProducts(): Promise<ProductDTO> {
  return await client.request(getProductsquery);
}
