const mongoose = require("mongoose");

const animeSchema = mongoose.Schema({
  name: String,
  ep_last: Number,
  ep_total: Number,
  img_url: String
});

const animeListSchema = mongoose.Schema({
  anime: animeSchema,
  viewer: {
    type: String,
    required: true
  },
  ep_watched: Number,
  status: Number,
  flag_like: Number,
  last_watched: Date
});

module.exports = mongoose.model('AnimeList', animeListSchema);
module.exports.schema = animeListSchema;