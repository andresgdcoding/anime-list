const express = require("express");
const genreSchema = require("../models/genre");

const router = express.Router();

//Create genre
router.post("/genre", (req,res) => {
  const genre = genreSchema(req.body);
  genre
    .save()
    .then((data) =>res.json(data))
    .catch((error) => res.json({ message: error}))
});

//List all genres
router.get("/genre", (req,res) => {
  genreSchema
    .find()
    .then((data) =>res.json(data))
    .catch((error) => res.json({ message: error}))
});

//Finde genre by id
router.get("/genre/:id", (req,res) => {
  const { id } = req.params;
  genreSchema
    .findById(id)
    .then((data) =>res.json(data))
    .catch((error) => res.json({ message: error}))
});

//Update genre
router.put("/genre/:id", (req,res) => {
  const { id } = req.params;
  const { name } = req.body;
  genreSchema
    .updateOne({ _id: id }, { $set: {name}})
    .then((data) =>res.json(data))
    .catch((error) => res.json({ message: error}))
});

//Delete Genre
router.delete("/genre/:id", (req,res) => {
  const { id } = req.params;
  genreSchema
    .deleteOne({ _id: id })
    .then((data) =>res.json(data))
    .catch((error) => res.json({ message: error}))
});

module.exports = router;