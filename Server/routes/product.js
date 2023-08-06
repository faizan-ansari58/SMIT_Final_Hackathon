import { Router } from "express";
import { product } from "../models/index.js";
import { upload } from "../middleware/imageUpload.js";

export const productRouter = Router();
productRouter.get("/product", async (req, res) => {
  try {
    const products = await product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
productRouter.get("/product/:_id", async (req, res) => {
  try {
    const products = await product.find({ _id: req.params._id });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

productRouter.post("/product", upload.array("file"), async (req, res) => {
  try {
    const imagesArray = req?.files?.map((img) => img?.path);
    const { name, description, price } = req.body;
    const newrProduct = await product.create({
      name,
      description,
      price,
      images: imagesArray,
    });
    res.status(201).json({
      status: true,
      message: "Product Added Successfully",
      data: newrProduct,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
