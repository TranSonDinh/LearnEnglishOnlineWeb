import { VocabularyModel } from "../models/VocabularyModel.js";

export const getVocabularys = async (req, res) => {
  try {
    const vocabularys = await VocabularyModel.find();
    res.status(200).json(vocabularys);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
