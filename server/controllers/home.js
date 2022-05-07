import { UserClientModel } from "../models/UserClientModel.js";

export const createAccountClient = async (req, res) => {
  try {
    const newUser = req.body;

    const user = new UserClientModel(newUser);
    await user.save();

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
