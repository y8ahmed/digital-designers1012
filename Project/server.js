const express = require("express");
const app = express(); // create express app

app.get("/backend", (req, res) => {
    // let req = {round: 1, py1: "rock", py2: "paper"}
    res.json({ winner: "py1", playon: true});
});

// start express server on port 3001
app.listen(3001, () => {
  console.log("server started on port 3001");
});