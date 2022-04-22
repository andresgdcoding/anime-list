const express = require("express");
const animeListSchema = require("../models/animeList");

const router = express.Router();

//Create animelist
router.post("/animelist", (req,res) => {
  const animeList = animeListSchema(req.body);
  animeList
    .save()
    .then((data) =>res.json(data))
    .catch((error) => res.json({ message: error}))
});

//List all animelist
router.get("/animelist", (req,res) => {
  animeListSchema
    .find()
    .then((data) =>res.json(data))
    .catch((error) => res.json({ message: error}))
});

//Find animelist by id
router.get("/animelist/:id", (req,res) => {
  const { id } = req.params;
  animeListSchema
    .findById(id)
    .then((data) =>res.json(data))
    .catch((error) => res.json({ message: error}))
});

//Update animelist
router.put("/animelist/:id", (req,res) => {
  const { id } = req.params;
  const { ep_watched, flag_like } = req.body;
  console.log(id,ep_watched,flag_like)
  animeListSchema
    .updateOne({ _id: id }, { $set: { ep_watched, flag_like}})
    .then((data) =>res.json(data))
    .catch((error) => res.json({ message: error}))
});

//Delete animelist
router.delete("/animelist/:id", (req,res) => {
  const { id } = req.params;
  animeListSchema
    .deleteOne({ _id: id })
    .then((data) =>res.json(data))
    .catch((error) => res.json({ message: error}))
});

//Find by User Watching
router.get("/animewatching/:id", (req,res) => {
  const { id } = req.params;
  animeListSchema
    .find({viewer: id, status: 0})
    .then((data) =>res.json(data))
    .catch((error) => res.json({ message: error}))
});

//Find by User Watched
router.get("/animewatched/:id", (req,res) => {
  const { id } = req.params;
  animeListSchema
    .find({viewer: id, status: 1})
    .then((data) =>res.json(data))
    .catch((error) => res.json({ message: error}))
});

//Watch Episode
router.put("/watch/:id", (req,res) => {
  const { id } = req.params;
  const { ep_watched } = req.body;
  animeListSchema
    .updateOne({ _id: id }, { $set: {ep_watched: ep_watched+1, last_watched: Date.now() }})
    .then((data) =>res.json(data))
    .catch((error) => res.json({ message: error}))
});


module.exports = router;