import mongoose, { Document, Schema } from "mongoose";

interface ProductFields {
  title: string;
  description: string;
  image: string;
  price: number;
}

interface ProductDocument extends Document, ProductFields {}

const productSchema = new Schema<ProductDocument>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true }
});

const ProductModel = mongoose.model<ProductDocument>("Product", productSchema);

export default ProductModel;
