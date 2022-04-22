import { ReadingModel } from "../models/ReadingModel.js";

export const getReadings = async (req, res) => {
  try {
    const readings = await ReadingModel.find();
    res.status(200).json(readings);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
