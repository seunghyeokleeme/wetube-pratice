const express = require("express");
const app = express();

const PORT = 3000;

function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}

function handleHome(req, res) {
  res.send("Hello from Home!");
}

function handleProfile(req, res) {
  res.send("Hello from Profile!");
}

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
