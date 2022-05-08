import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    reading: [
      {
        questionId: {
          type: String,
          required: true,
        },
        result: {
          type: Number,
          required: true,
          default: 0,
        },
      },
    ],
    listening: [
      {
        questionId: {
          type: String,
          required: true,
        },
        result: {
          type: Number,
          required: true,
          default: 0,
        },
      },
    ],
    vocabulary: {
      type: Array,
    },
    testing: [
      {
        questionId: {
          type: String,
          required: true,
        },
        result: {
          type: Number,
          required: true,
          default: 0,
        },
      },
    ],
  },
  { timestamps: true }
);

export const UserClientModel = mongoose.model("users", schema);
