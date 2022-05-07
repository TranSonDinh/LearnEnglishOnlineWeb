import express from "express";
import { createAccountClient } from "../controllers/home.js";

const router = express.Router();

router.post("/sign-up", createAccountClient);

export default router;
