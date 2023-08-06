import express from "express";
import cors from "cors";
import { authRouter } from "./routes/index.js";
import { productRouter } from "./routes/product.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/uploads", cors(), express.static("./uploads"));
app.use("/", authRouter);
app.use("/", productRouter);

export default app;
