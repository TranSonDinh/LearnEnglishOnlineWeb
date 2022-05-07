import express from "express";
import { createAccountClient, login } from "../controllers/home.js";

const router = express.Router();

router.post("/sign-up", createAccountClient);

router.post("/sign-in", login);

export default router;
