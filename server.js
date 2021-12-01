const express = require("express");
const app = express(); // create express app

const choices = ["rock", "paper", "scissors"];
const hardChoices = {
  "rock": ["paper", "scissors"],
  "paper": ["rock", "scissors"],
  "scissors": ["rock", "paper"]
}

app.get("/hard", (req, res) => {
    let move = req.query.selected
    console.log(move)
    let i = hardChoices[move]
    console.log(i)
    const computerChoiceIndex = Math.floor(Math.random() * i.length);
    console.log(i[computerChoiceIndex])
    res.json({ move: i[computerChoiceIndex]});
});

app.get("/easy", (req, res) => {
  const computerChoiceIndex = Math.floor(Math.random() * choices.length);
  res.json({ move: choices[computerChoiceIndex]});
});


// start express server on port 3001
app.listen(3001, () => {
  console.log("server started on port 3001");
});