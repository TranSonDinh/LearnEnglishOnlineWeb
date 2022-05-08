import { TestingModel } from "../models/TestingModel.js";

export const getTestings = async (req, res) => {
  try {
    const testings = await TestingModel.find();
    res.status(200).json(testings);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createTesting = async (req, res) => {
  const newTesting = req.body;
  TestingModel.insertOne(newTesting)
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};
