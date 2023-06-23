<<<<<<< HEAD
import mongoose, { Document, Schema } from "mongoose";
=======
import mongoose, { Document, Schema } from 'mongoose';
>>>>>>> 71a1120d302b4e00f52ce6034ef267c0878c4226

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
<<<<<<< HEAD
  review: { type: [String], required: false }
});

const ProductModel = mongoose.model<ProductDocument>("Product", productSchema);
=======
  review: { type: [String], required: false },
});

const ProductModel = mongoose.model<ProductDocument>('Product', productSchema);
>>>>>>> 71a1120d302b4e00f52ce6034ef267c0878c4226

export default ProductModel;
