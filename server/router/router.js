require("dotenv").config();
const express = require("express");
const authToken = require("../validations/authToken")

const router = express.Router();
const jwt = require("jsonwebtoken");


const {
    getAllUserDetails,
  addNewUser,
  getUser,
  updateUser,
  deleteUser,
  } = require('../controllers/userDetails');

router.post("/login", (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  const token = jwt.sign({ username, password }, process.env.SECRET_KEY, { expiresIn: "10h" });
  res.json({token, ...req.body});
});
router.post("/authVerify", (req, res) => {
  console.log(req.body);
  const { token } = req.body;
  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    console.log(err)
    if (err) return res.sendStatus(403)
    res.json(user)
  })
});

router.get('/users', authToken, getAllUserDetails)
router.post('/users', authToken, addNewUser)
router.get('/users/:id', authToken, getUser)
router.put('/users/:id', authToken, updateUser)
router.delete('/users/:id', authToken, deleteUser)

module.exports = router;