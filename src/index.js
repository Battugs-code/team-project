import express from "express";
import { todoRouter } from "./routers/todo";
const app = express();

app.use(express.json());

app.use("/todo", todoRouter);

app.listen(3000, () => {
  console.log("express app running at 3000");
});
