const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

const places = require("./data/places.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("server is running");
});

app.get("/places", (req, res) => {
  res.send(places);
});

app.get("/places/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const SpecificPlace = places.find(pl => pl.id === id)
    res.send(SpecificPlace)
});

app.listen(port, () => {
  console.log(port, "running");
});
