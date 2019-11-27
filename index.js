const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let movies = [
  {
    id: 1,
    judul: "Spiderman",
    tahun: 2015
  },
  {
    id: 2,
    judul: "Avenger: End Game",
    tahun: 2017
  },
  {
    id: 3,
    judul: "Ford & Ferrari",
    tahun: 2019
  }
];

app.get("/", (req, res, next) => res.send("<h1>Welcome to my Homepage</h1>"));

app.get("/movies", (req, res) => {
  res.status(200).send(movies);
});

app.get("/movies/:id", (req, res) => {
  const idParameter = req.params.id;
  const movie = movies.find(data => data.id == idParameter);

  res.send(movie);
});

app.post("/movies", (req, res) => {
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
});

app.get("/say", (request, response, next) => {
  response.send({
    message: "Hello Roby Afrizal Palmendha!"
  });
});

//setup server to listen on port: 3000
app.listen(process.env.PORT, () =>
  console.log("Server running on port : " + process.env.PORT)
);
