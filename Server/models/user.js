import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: String,
    password: String,
    email: String,
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const user = model("User", userSchema);
