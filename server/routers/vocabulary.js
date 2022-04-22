import express from "express";
import { getVocabularys } from "../controllers/vocabulary.js";

const router = express.Router();

router.get("/", getVocabularys);

export default router;
