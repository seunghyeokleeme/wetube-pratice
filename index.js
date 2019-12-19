import express from "express";
const app = express();

const PORT = 3000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello from home");

const handleProfile = (req, res) => res.send("Hello from Profile!");

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
