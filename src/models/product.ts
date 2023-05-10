import { Model, model, Schema } from "mongoose";
import Product from "../types/Product";

const productSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 500
    },
    price: {
      type: Number,
      required: true,
      min: 0
    }
  },
  {
    timestamps: true
  }
);

const Product: Model<Product> = model<Product>("Product", productSchema);

export default Product;
