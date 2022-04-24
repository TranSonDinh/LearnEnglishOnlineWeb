import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
    },
    question: [
      {
        title: {
          type: String,
          required: true,
        },
        answers: {
          type: Array,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

export const ReadingModel = mongoose.model("readings", schema);
