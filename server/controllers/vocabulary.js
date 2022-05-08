import { VocabularyModel } from "../models/VocabularyModel.js";

export const getVocabularys = async (req, res) => {
  try {
    const vocabularys = await VocabularyModel.find();
    res.status(200).json(vocabularys);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createVocabulary = async (req, res) => {
  const newVocabulary = req.body;
  VocabularyModel.insertMany(newVocabulary)
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

export const deleteOnVocabulary = async (req, res) => {
  try {
    const { id } = req.body;
    const vocabulary = await VocabularyModel.deleteOne({ _id: id });
    res.status(200).json(vocabulary);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updateVocabulary = async (req, res) => {
  try {
    const updateVocabulary = req.body;
    const newQuestion = updateVocabulary?.question?.map((item) => ({
      title: item.title,
      answers: item.answers,
    }));
    const vocabulary = await VocabularyModel.findOneAndUpdate(
      { _id: updateVocabulary._id },
      { ...updateVocabulary, question: newQuestion },
      { new: true }
    );

    res.status(200).json(vocabulary);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
