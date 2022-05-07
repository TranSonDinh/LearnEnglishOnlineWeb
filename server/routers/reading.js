import express from "express";
import {
  getReadings,
  createReading,
  findOneReading,
  deleteOnReading,
} from "../controllers/reading.js";

const router = express.Router();

router.get("/", getReadings);

router.post("/", createReading);

router.get("/:id", findOneReading);

router.delete("/", deleteOnReading);

export default router;
