import { prisma } from "../prisma/prismaClient";

export async function getImagesByProdId(prodId: string) {
  return await prisma.image.findMany({
    where: {
      productId: prodId,
    },
  });
}
