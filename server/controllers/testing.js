import { TestingModel } from "../models/TestingModel.js";

export const getTestings = async (req, res) => {
  try {
    const testings = await TestingModel.find();
    res.status(200).json(testings);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
