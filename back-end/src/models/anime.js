const mongoose = require("mongoose");
const genreSchema = require("../models/genre");

const animeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  synopsis: {
    type: String,
    required: true
  },
  ep_last: {
    type: Number,
    required: true
  },
  n_likes: {
    type: Number,
    required: true
  },
  flag_approved: {
    type: Number,
    required: true
  },
  ep_total: {
    type: Number,
    required: true
  },
  img_url: {
    type: String,
    required: true
  },
  genres: {
    type: [genreSchema.schema],
    required: true
  }
});

module.exports = mongoose.model('Anime', animeSchema);
module.exports.schema = animeSchema;