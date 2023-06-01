/* eslint-disable no-console */
import express from "express";
import dotenv from "dotenv";
import mongoose, { ConnectOptions } from "mongoose";
import productsRouter from "./routes/api/productRoutes";
import ProductModel from "./models/product";
import initialProducts from "./mockData/products";

const productData = initialProducts.map((product) => {
  const transformedPrice = parseFloat(product.price.replace(/,/g, ""));
  return { ...product, price: transformedPrice };
});

dotenv.config();
const app = express();

app.use(express.json());

// routes
app.use("/api/products", productsRouter);

// database connection
mongoose
  .connect(
    process.env.MONGO_URI as string,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    } as ConnectOptions
  )
  .then(() => {
    console.log("Connected to database");
    ProductModel.insertMany(productData)
      .then(() => {
        console.log("Initial Products data inserted");
      })
      .catch((error) => {
        console.error("Error inserting initial product data:", error);
      });
  })
  .catch((error: Error) => {
    console.log(`Database connection error: ${error.message}`);
  });

export default app;
