import express from "express";
import {
  deleteTodo,
  updateTodo,
  getTodo,
  createTodo,
} from "../controllers/todo.js";
export const todoRouter = express.Router();

todoRouter.get("/get", getTodo);
todoRouter.post("/add", createTodo);
todoRouter.put("update", updateTodo);
todoRouter.delete("/delete", deleteTodo);
