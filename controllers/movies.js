let { movies } = require("../models/movies");

module.exports = {
  getMovies: (req, res) => {
    res.status(200).send(movies);
  },
  getMoviesById: (req, res) => {
    const idParams = req.params.id;
    const movie = movies.find(data => data.id == idParams);

    res.send(movie);
  },
  postMovies: (req, res) => {
    const lastIndex = movies.length - 1;
    const id = movies[lastIndex].id + 1;
    const judul = req.body.judul;
    const tahun = req.body.tahun;

    const movie = {
      id,
      judul,
      tahun
    };

    movies.push(movie);
    res.send({
      message: "Success Movie Added",
      movies
    });
  },
  putMovies: (req, res) => {
    try {
      let getUpdate = movies.findIndex(data => data.id == req.params.id);

      movies.map(data => {
        if (data.id == req.params.id) {
          movies[getUpdate].judul = req.body.judul;
        }
      });
      res.send({
        message: "Data successfully updated",
        movies
      });
    } catch (error) {
      res.send(error);
    }
  },
  deleteMovies: (req, res) => {
    try {
      const idDelete = req.params.id;
      let item = movies.filter(item => item.id !== parseInt(idDelete));

      movies = item;

      res.status(200).send(movies);
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  }
};
