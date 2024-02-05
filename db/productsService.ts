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
