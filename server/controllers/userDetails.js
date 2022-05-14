const User = require("../models/userSchema");
const userToken = require("../validations/authToken");

const getAllUserDetails = async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json({ user });
  } catch (error) {
    res.status(404).json({ msg: error });
  }
};

const addNewUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getUser = async (req, res) => {
  try {
    const { id: userID } = req.params;
    const user = await User.findOne({ _id: userID });
    res.status(200).json({ user });
  } catch (error) {
    res.status(404).json({ msg: error });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id: userID } = req.params;
    const user = await User.findOneAndDelete({ _id: userID });
    res.status(200).json({ user });
  } catch (error) {
    res.status(404).json({ msg: error });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id: userID } = req.params;
    const user = await User.findByIdAndUpdate({ _id: userID }, req.body);
    res.status(200).json({ user });
  } catch (error) {
    res.status(404).json({ msg: error });
  }
};

module.exports = {
  getAllUserDetails,
  addNewUser,
  getUser,
  updateUser,
  deleteUser,
};
