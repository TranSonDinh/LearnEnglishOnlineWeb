import express from "express";
import {
  createListening,
  deleteOnListening,
  findOneListening,
  getListenings,
  updateListening,
} from "../controllers/listening.js";

const router = express.Router();

router.get("/", getListenings);

router.post("/", createListening);

router.get("/:id", findOneListening);

router.delete("/", deleteOnListening);

router.post("/update", updateListening);

export default router;
