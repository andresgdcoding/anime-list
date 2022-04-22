const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

//Create user
router.post("/user", (req,res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) =>res.json(data))
    .catch((error) => res.json({ message: error}))
});

//List all users
router.get("/user", (req,res) => {
  userSchema
    .find()
    .then((data) =>res.json(data))
    .catch((error) => res.json({ message: error}))
});

//Find user by id
router.get("/user/:id", (req,res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) =>res.json(data))
    .catch((error) => res.json({ message: error}))
});

//Update user
router.put("/user/:id", (req,res) => {
  const { id } = req.params;
  const { email, password } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: {email, password}})
    .then((data) =>res.json(data))
    .catch((error) => res.json({ message: error}))
});

//Delete user
router.delete("/user/:id", (req,res) => {
  const { id } = req.params;
  userSchema
    .deleteOne({ _id: id })
    .then((data) =>res.json(data))
    .catch((error) => res.json({ message: error}))
});

module.exports = router;