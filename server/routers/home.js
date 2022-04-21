import express from "express";
// import { getPosts } from "../controllers/posts.js";

const router = express.Router();

router.get("/", async (req, res) => {
  console.log("hii");
});

export default router;
