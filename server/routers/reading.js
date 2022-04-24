import express from "express";
import {
  getReadings,
  createReading,
  findOneReading,
} from "../controllers/reading.js";

const router = express.Router();

router.get("/", getReadings);

router.post("/", createReading);

router.get("/:id", findOneReading);

export default router;
