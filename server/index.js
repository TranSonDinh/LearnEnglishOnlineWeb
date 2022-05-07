import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import reading from "./routers/reading.js";
import listening from "./routers/listening.js";
import testing from "./routers/testing.js";
import vocabulary from "./routers/vocabulary.js";
import home from "./routers/home.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const URI = process.env.DATABASE_URL;

app.use(cors());
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: true, limit: "30mb" }));

app.use("/readings", reading);
app.use("/listenings", listening);
app.use("/testings", testing);
app.use("/vocabulary", vocabulary);
app.use("/", home);

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("err", err);
  });
