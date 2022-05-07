import express from "express";
import {
  createAccountClient,
  login,
  updateReading,
} from "../controllers/home.js";

const router = express.Router();

router.post("/sign-up", createAccountClient);

router.post("/sign-in", login);

router.post("/reading/update", updateReading);

export default router;
