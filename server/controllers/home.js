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

export const updateReading = async (req, res) => {
  try {
    const { id, account, percent } = req.body;
    const user = await UserClientModel.findOne({
      username: account,
    });
    let reading = user?.reading || [];
    const currentReading = reading.find(({ questionId }) => questionId === id);

    if (currentReading) {
      reading = reading.map((item) => {
        if (item?.questionId === id && Number(item?.result) < Number(percent)) {
          return { questionId: id, result: percent };
        }
        return item;
      });
    } else {
      reading.push({ questionId: id, result: percent });
    }

    await UserClientModel.findOneAndUpdate(
      { username: account },
      { $set: { reading: reading } },
      { new: true }
    );
    res.status(200).json("Success!");
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
