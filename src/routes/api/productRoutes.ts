import express, { Request, Response } from "express";

import Product from "../../models/product";

const router = express.Router();

router.get("/", (req, res) => {
  Product.find()
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
router.post("/", (req: Request, res: Response) => {
  const newProduct = new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price
  });
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
  Product.findByIdAndUpdate(req.params.id, req.body)
    .then(() => Product.findById(req.params.id))
    .then((product) => res.send(product))
    .catch(next);
});

router.delete("/:id", (req, res) => {
  Product.findByIdAndRemove(req.params.id)
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
