import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
    },
    readingQuestions: {
      type: Array,
      required: true,
    },
    listeningQuestions: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

export const TestingModel = mongoose.model("testings", schema);
