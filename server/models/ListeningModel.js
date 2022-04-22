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
    answers: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

export const ListeningModel = mongoose.model("listenings", schema);
