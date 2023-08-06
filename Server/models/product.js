import { Schema, model } from "mongoose";

let productSchema = new Schema(
  {
    name: String,
    description: String,
    images: Array,
    price: Number,
    
    totalQuantity: { type: Number, minlength: 0 },
    visibility: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export const product = model("product", productSchema);
