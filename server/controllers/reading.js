import { ReadingModel } from "../models/ReadingModel.js";

export const getReadings = async (req, res) => {
  try {
    const readings = await ReadingModel.find();
    res.status(200).json(readings);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createReading = async (req, res) => {
  const newReading = req.body;
  ReadingModel.insertMany(newReading)
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

export const findOneReading = async (req, res) => {
  try {
    const id = req.params?.id;
    const reading = await ReadingModel.find({ _id: id });
    res.status(200).json(reading);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const deleteOnReading = async (req, res) => {
  try {
    const { id } = req.body;
    const reading = await ReadingModel.deleteOne({ _id: id });
    res.status(200).json(reading);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updateReading = async (req, res) => {
  try {
    const updateReading = req.body;
    const newQuestion = updateReading?.question?.map((item) => ({
      title: item.title,
      answers: item.answers,
    }));
    const reading = await ReadingModel.findOneAndUpdate(
      { _id: updateReading._id },
      { ...updateReading, question: newQuestion },
      { new: true }
    );

    res.status(200).json({});
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
