import express from "express";
import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from "../controllers/taskcontroller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Protected routes
router.post("/", protectRoute, createTask);
router.get("/", protectRoute, getTasks);
router.get("/:id", protectRoute, getTaskById);
router.put("/:id", protectRoute, updateTask);
router.delete("/:id", protectRoute, deleteTask);

export default router;
