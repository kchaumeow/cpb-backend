import { prisma } from "../prisma/prismaClient";
import { getImagesByProdId } from "./imagesService";

export async function getAllProductsFromDb() {
  const products = await prisma.product.findMany();
  const records = [];
  for (let product of products) {
    const images = await getImagesByProdId(product.id);
    records.push({ product, images });
  }
  return records;
}

export async function getProductById(id: string) {
  const product = await prisma.product.findUnique({
    where: {
      id: id,
    },
  });

  const image = await prisma.image.findFirst({
    where: {
      productId: id,
    },
  });

  return {
    product,
    image,
  };
}
