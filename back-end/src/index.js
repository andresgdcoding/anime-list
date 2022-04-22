const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const genreRoutes = require("./routes/genre");
const animeRoutes = require("./routes/anime");
const animeListRoutes = require("./routes/animeList");
const userRoutes = require("./routes/user");

const app = express();
const port = process.env.PORT || 9000;


//middleware
app.use(express.json());
app.use('/api', genreRoutes);
app.use('/api', animeRoutes);
app.use('/api', animeListRoutes);
app.use('/api', userRoutes);

// routes
app.get('/', (req,res) => {
  res.send("App lista anime");
})

//mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

app.listen(port, () => console.log("server listening in port", port));

 