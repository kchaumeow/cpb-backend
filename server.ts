import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = 3000;
app.use(cors());
import { getProductsFromShopify } from "./shopifyApi";
import { loadProductsToDb } from "./db/loadProductsDb";
import { clearDatabase } from "./db/clearDb";
import { getAllProductsFromDb } from "./db/productsService";

app.get("/", async (req, res) => {
  const products = await getProductsFromShopify();
  res.send(products);
});

async function main() {
  await loadProductsToDb();
  const server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });

  process.on("SIGTERM", shutDown);
  process.on("SIGINT", shutDown);

  function shutDown() {
    server.close(clearDatabase);
  }
}

app.get("/products", async (req, res) => {
  const products = await getAllProductsFromDb();
  res.send(products);
});

main();
