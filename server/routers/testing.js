import express from "express";
import { createTesting, getTestings } from "../controllers/testing.js";

const router = express.Router();

router.get("/", getTestings);

router.post("/", createTesting);

export default router;
