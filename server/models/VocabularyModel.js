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
    example: {
      type: String,
    },
    imageSrc: {
      type: String,
    },
    answers: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

export const VocabularyModel = mongoose.model("vocabularys", schema);
