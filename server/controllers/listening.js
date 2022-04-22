import { ListeningModel } from "../models/ListeningModel.js";

export const getListenings = async (req, res) => {
  try {
    const listenings = await ListeningModel.find();
    res.status(200).json(listenings);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
