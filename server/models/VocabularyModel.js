import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    spelling: {
      type: String,
      required: true,
    },
    example: {
      type: String,
    },
    imageSrc: {
      type: String,
    },
    audioSrc: {
      type: String,
    },
  },
  { timestamps: true }
);

export const VocabularyModel = mongoose.model("vocabularys", schema);
