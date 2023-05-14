import express, { Request, Response } from "express";

import { Document } from "mongoose";
import ProductModel from "../../models/product";

interface ProductFields {
  title: string;
  description: string;
  image: string;
  price: number;
}
interface ProductDocument extends ProductFields, Document {}

const router = express.Router();

router.get("/", (req, res) => {
  ProductModel.find()
    .then((products) => {
      if (products.length === 0) {
        res.status(204);
        res.json({ message: "no products exists" });
      }
      res.json(products);
    })
    .catch((error: Error) => {
      res.status(500).json({ error: error.message });
    });
});
// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    // Find the product by ID in the database
    const product: ProductDocument | null = await ProductModel.findById(
      productId
    );
    if (!product) {
      // If product is not found, return 404
      return res.status(404).json({ message: "Product not found" });
    }
    // If product is found, return it
    return res.json(product);
  } catch (error) {
    // Handle any errors that occurred during the process
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/", (req: Request, res: Response) => {
  const newProduct = new ProductModel(req.body);
  newProduct
    .save()
    .then((product) => {
      res.status(201);
      res.json({ message: "Product added successfully", product });
    })
    .catch((error: Error) => {
      res.status(500).json({ error: error.message });
    });
});

router.put("/:id", (req, res, next) => {
  ProductModel.findByIdAndUpdate(req.params.id, req.body)
    .then(() => ProductModel.findById(req.params.id))
    .then((product) => res.send(product))
    .catch(next);
});

router.delete("/:id", (req, res) => {
  ProductModel.findByIdAndRemove(req.params.id)
    .then(() => {
      res.status(404);
      res.send({ message: `product of id ${req.params.id} doesn't exists` });
    })
    .catch((error: Error) => {
      res.status(500);
      res.send({ message: error.message });
    });
});

export = router;
// export default router
