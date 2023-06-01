import mongoose, { Document, Schema } from "mongoose";

interface ProductFields {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string[];
  categories: string;
  rating: string;
  inStock: boolean;
  review: string[];
}

interface ProductDocument extends Document, ProductFields {
  id: string;
}

const productSchema = new Schema<ProductDocument>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: [String], required: false },
  price: { type: Number, required: true },
  categories: { type: String, required: false },
  rating: { type: String, required: false },
  inStock: { type: Boolean, required: false },
  review: { type: [String], required: false }
});

const ProductModel = mongoose.model<ProductDocument>("Product", productSchema);

export default ProductModel;
