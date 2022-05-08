import express from "express";
import {
  createAccountClient,
  login,
  updateReading,
  updateListening,
} from "../controllers/home.js";

const router = express.Router();

router.post("/sign-up", createAccountClient);

router.post("/sign-in", login);

router.post("/reading/update", updateReading);

router.post("/listening/update", updateListening);

export default router;
