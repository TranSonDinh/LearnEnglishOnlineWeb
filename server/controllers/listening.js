import { ListeningModel } from "../models/ListeningModel.js";

export const getListenings = async (req, res) => {
  try {
    const listenings = await ListeningModel.find();
    res.status(200).json(listenings);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createListening = async (req, res) => {
  const newListening = req.body;

  ListeningModel.insertMany(newListening)
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

export const findOneListening = async (req, res) => {
  try {
    const id = req.params?.id;
    const listening = await ListeningModel.find({ _id: id });
    res.status(200).json(listening);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const deleteOnListening = async (req, res) => {
  try {
    const { id } = req.body;
    const listening = await ListeningModel.deleteOne({ _id: id });
    res.status(200).json(listening);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updateListening = async (req, res) => {
  try {
    const updateListening = req.body;
    const newQuestion = updateListening?.question?.map((item) => ({
      title: item.title,
      answers: item.answers,
    }));
    const listening = await ListeningModel.findOneAndUpdate(
      { _id: updateListening._id },
      { ...updateListening, question: newQuestion },
      { new: true }
    );

    res.status(200).json(listening);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
