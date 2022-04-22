import express from "express";
import { getTestings } from "../controllers/testing.js";

const router = express.Router();

router.get("/", getTestings);

export default router;
