import { getProductsFromShopify } from "../shopifyApi";
import { prisma } from "../prisma/prismaClient";

export async function loadProductsToDb() {
  const products = (await getProductsFromShopify()).products;

  await prisma.product.createMany({
    data: products.edges.map((product) => {
      return {
        id: product.node.id,
        bodyHtml: product.node.bodyHtml,
      };
    }),
  });
  products.edges.map(async (product) => {
    const sources = getImages(product);
    await prisma.image.createMany({
      data: sources.map((source: { src: string }) => {
        return {
          productId: product.node.id,
          src: source.src,
        };
      }),
    });
  });
}

function getImages(product: any) {
  return product.node.images.nodes.map((image: { src: string }) => {
    return {
      src: image.src,
    };
  });
}
