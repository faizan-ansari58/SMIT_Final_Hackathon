import { Router } from "express";
import { Order } from "../models/Order.js";
export const OrderRouter = Router();
productRouter.post("/order", async (req, res) => {
  try {
    const { userId, items, totalPrice, status, shippingAddress } = req.body;

    const newOrder = new Order({
      userId: mongoose.Types.ObjectId(userId),
      items: items.map((item) => ({
        productId: mongoose.Types.ObjectId(item.productId),
        quantity: item.quantity,
      })),
      totalPrice,
      status,
      shippingAddress,
    });
    const savedOrder = await newOrder.save();

    res.status(201).json(savedOrder);
  } catch (error) {
    console.error("Error creating the order:", error);
    res.status(500).json({ error: "Error creating the order" });
  }
});
