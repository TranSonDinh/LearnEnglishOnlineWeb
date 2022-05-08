import express from "express";
import {
  getVocabularys,
  createVocabulary,
  deleteOnVocabulary,
  updateVocabulary,
} from "../controllers/vocabulary.js";

const router = express.Router();

router.get("/", getVocabularys);

router.post("/", createVocabulary);

router.delete("/", deleteOnVocabulary);

router.post("/update", updateVocabulary);

export default router;
