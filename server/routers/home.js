import express from "express";
import {
  createAccountClient,
  login,
  updateReading,
  updateListening,
  updateVocabulary,
} from "../controllers/home.js";

const router = express.Router();

router.post("/sign-up", createAccountClient);

router.post("/sign-in", login);

router.post("/reading/update", updateReading);

router.post("/listening/update", updateListening);

router.post("/vocabularys/update", updateVocabulary);

export default router;
