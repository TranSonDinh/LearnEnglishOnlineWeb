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

export const login = async (req, res) => {
  try {
    const { username, password } = req.body.data;
    let user = await UserClientModel.findOne({
      username: username,
      password: password,
    });
    if (user?.length === 0 || !user) {
      user = await UserClientModel.findOne({
        email: username,
        password: password,
      });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};
