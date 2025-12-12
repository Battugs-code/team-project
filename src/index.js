import express from "express";
import { connectDb } from "./db";
const app = express();
await connectDb();
app.use(express.json());
app.listen(3000, () => {
  console.log("express app running at 3000");
});
