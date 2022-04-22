const express = require("express");
const animeSchema = require("../models/anime");

const router = express.Router();


//Create anime
router.post("/anime", (req,res) => {
  const anime = animeSchema(req.body);
  anime
    .save()
    .then((data) =>res.json(data))
    .catch((error) => res.json({ message: error}))
});

//List all anime
router.get("/anime", (req,res) => {
  animeSchema
    .find()
    .then((data) =>res.json(data))
    .catch((error) => res.json({ message: error}))
});

//Finde anime by id
router.get("/anime/:id", (req,res) => {
  const { id } = req.params;
  animeSchema
    .findById(id)
    .then((data) =>res.json(data))
    .catch((error) => res.json({ message: error}))
});

//Update anime
router.put("/anime/:id", (req,res) => {
  const { id } = req.params;
  const { name, synopsis, day, n_likes, flag_approved, ep_total, img_url, genres } = req.body;
  animeSchema
    .updateOne({ _id: id }, { $set: {name, synopsis, day, n_likes, flag_approved, ep_total, img_url, genres}})
    .then((data) =>res.json(data))
    .catch((error) => res.json({ message: error}))
});

//Delete anime
router.delete("/anime/:id", (req,res) => {
  const { id } = req.params;
  animeSchema
    .deleteOne({ _id: id })
    .then((data) =>res.json(data))
    .catch((error) => res.json({ message: error}))
});

//Search by genres and chapters
router.get("/anime_search", async (req,res) => {
  const { genres, min_episode, max_episode } = req.body;
  
  try{
    const data =await animeSchema
    .find({ $and:
      [{ ep_last: { $lt: max_episode }}, { ep_last: { $gt: min_episode }}, { 'genres': {$all: genres}}]//
    });
    res.json(data)
  }
  catch (error){
    res.json({ message: error})
  }

});

module.exports = router;