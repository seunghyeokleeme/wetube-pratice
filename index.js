const express = require("express");
const app = express();

const PORT = 4000;

function handleHome(req, res) {
  res.send("Home");
}

function handleProfile(req, res) {
  res.send("profile");
}

app.get("/", handleHome);

app.get("/profile", handleProfile);

function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);
