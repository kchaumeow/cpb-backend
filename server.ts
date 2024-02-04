import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = 3000;
app.use(cors());
import { getProducts } from "./apiProducts/getProducts";
import { loadProductsToDb } from "./apiProducts/loadProductsDb";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

app.get("/", async (req, res) => {
  const products = await getProducts();
  res.send(products);
});

async function main() {
  await loadProductsToDb();
  const server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });

  server.close(() => {
    prisma["product"].deleteMany();
    prisma["image"].deleteMany();
  });
}

main();
