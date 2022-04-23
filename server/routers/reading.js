import express from "express";
import { getReadings, createReading } from "../controllers/reading.js";

const router = express.Router();

router.get("/", getReadings);

router.post("/", createReading);

export default router;
