import express from "express";
import { getListenings } from "../controllers/listening.js";

const router = express.Router();

router.get("/", getListenings);

export default router;
