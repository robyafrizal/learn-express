const express = require("express");
const route = express.Router();

const {
  getMovies,
  getMoviesById,
  postMovies,
  deleteMovies,
  putMovies
} = require("../controllers/movies");

route.get("/", getMovies);
route.get("/:id", getMoviesById);
route.post("/", postMovies);
route.delete("/:id", deleteMovies);
route.put("/:id", putMovies);

module.exports = route;
