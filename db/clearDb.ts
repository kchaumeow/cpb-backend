import { prisma } from "../prisma/prismaClient";
export async function clearDatabase() {
  await prisma["product"].deleteMany();
  await prisma["image"].deleteMany();
}
