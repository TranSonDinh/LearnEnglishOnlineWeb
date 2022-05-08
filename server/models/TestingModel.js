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
    readingQuestions: [
      {
        threads: {
          type: String,
        },
        questions: [
          {
            title: {
              type: String,
              required: true,
            },
            content: {
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
    ],
    listeningQuestions: [
      {
        audioSrc: {
          type: String,
        },
        questions: [
          {
            title: {
              type: String,
              required: true,
            },
            content: {
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
    ],
  },
  { timestamps: true }
);

export const TestingModel = mongoose.model("testings", schema);
