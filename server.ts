import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = 3000;
app.use(cors());
import { getProducts } from "./getProducts";


app.get("/", async(req, res) => {
  const products = await getProducts();
  res.send(products);
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })