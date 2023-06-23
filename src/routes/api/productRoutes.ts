import express, { Request, Response } from 'express';
import { Document } from 'mongoose';
import ProductModel from '../../models/product';

<<<<<<< HEAD
import { Document } from "mongoose";
import ProductModel from "../../models/product";
=======
console.log(4);
>>>>>>> 71a1120d302b4e00f52ce6034ef267c0878c4226

interface ProductFields {
  title: string;
  description: string;
  image: string;
  price: number;
}
interface ProductDocument extends ProductFields, Document {}

const router = express.Router();

<<<<<<< HEAD
router.get("/", (req, res) => {
  ProductModel.find()
    .then((products) => {
      if (products.length === 0) {
        res.status(204).json({ message: "No products exist" });
=======
router.get('/', (req, res) => {
  ProductModel.find()
    .then(products => {
      if (products.length === 0) {
        res.status(204).json({ message: 'No products exist' });
>>>>>>> 71a1120d302b4e00f52ce6034ef267c0878c4226
      } else {
        res.json(products);
      }
    })
<<<<<<< HEAD
    .catch((error) => {
=======
    .catch(error => {
>>>>>>> 71a1120d302b4e00f52ce6034ef267c0878c4226
      res.status(500).json({ error: error.message });
    });
});

// eslint-disable-next-line @typescript-eslint/no-misused-promises
<<<<<<< HEAD
router.get("/:id", async (req: Request, res: Response) => {
=======
router.get('/:id', async (req: Request, res: Response) => {
>>>>>>> 71a1120d302b4e00f52ce6034ef267c0878c4226
  try {
    const productId = req.params.id;
    // Find the product by ID in the database
    const product: ProductDocument | null = await ProductModel.findById(
      productId
    );
    if (!product) {
      // If product is not found, return 404
<<<<<<< HEAD
      return res.status(404).json({ message: "Product not found" });
=======
      return res.status(404).json({ message: 'Product not found' });
>>>>>>> 71a1120d302b4e00f52ce6034ef267c0878c4226
    }
    // If product is found, return it
    return res.json(product);
  } catch (error) {
    // Handle any errors that occurred during the process
<<<<<<< HEAD
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/", (req: Request, res: Response) => {
=======
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.post('/', (req: Request, res: Response) => {
>>>>>>> 71a1120d302b4e00f52ce6034ef267c0878c4226
  const newProduct = new ProductModel(req.body);
  newProduct
    .save()
    .then(product => {
      res.status(201);
      res.json({ message: 'Product added successfully', product });
    })
    .catch((error: Error) => {
      res.status(500).json({ error: error.message });
    });
});

<<<<<<< HEAD
router.put("/:id", (req, res, next) => {
  ProductModel.findByIdAndUpdate(req.params.id, req.body)
    .then(() => ProductModel.findById(req.params.id))
    .then((product) => res.send(product))
    .catch(next);
});

router.delete("/:id", (req, res) => {
=======
router.put('/:id', (req, res, next) => {
  ProductModel.findByIdAndUpdate(req.params.id, req.body)
    .then(() => ProductModel.findById(req.params.id))
    .then(product => res.send(product))
    .catch(next);
});

router.delete('/:id', (req, res) => {
>>>>>>> 71a1120d302b4e00f52ce6034ef267c0878c4226
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
