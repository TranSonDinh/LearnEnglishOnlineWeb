import express from "express";
import { getReadings } from "../controllers/reading.js";

const router = express.Router();

router.get("/", getReadings);

export default router;
