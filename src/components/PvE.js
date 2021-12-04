import React, { useMemo, useState } from "react";
import axios from "axios";

export default function PvE({ myChoice, level }) {
  const [selected, setSelected] = useState("");
  const [computerSelected, setComputedSelected] = useState("");

  let [score, setScore] = useState(0);
  let [computerScore, setComputerScore] = useState(0);

  let [playerIndicator, setPlayerIndicator] = useState(0);
  let [computerIndicator, setComputerIndicator] = useState(0);

  let [counter, setCounter] = useState(0);
  let [round, setRound] = useState("");

  const play = () => {
    // call backend and get the difficulty
    console.log(level);
    if (!selected) {
      return;
    }
    if (level === 0) {
      axios.get(`/easy`).then((res) => {
        setComputedSelected(res.data.move);
      });
    } else if (level === 1) {
      axios.get(`/hard`, { params: { selected: selected } }).then((res) => {
        setComputedSelected(res.data.move);
      });
    }
  };

  const result = useMemo(() => {
    setPlayerIndicator(playerIndicator++);
    setComputerIndicator(computerIndicator++);

    if (playerIndicator !== counter && computerIndicator !== counter) {
      if (score !== 3 && computerScore !== 3) {
        if (selected === "rock" && computerSelected === "scissors") {
          setScore(score + 1);
          setCounter(counter + 1);
          return "Player 1 Won";
        } else if (selected === "rock" && computerSelected === "paper") {
          setComputerScore(computerScore + 1);
          setCounter(counter + 1);
          return "The Computer Won";
        } else if (selected === "scissors" && computerSelected === "paper") {
          setScore(score + 1);
          setCounter(counter + 1);
          return "Player 1 Won";
        } else if (selected === "scissors" && computerSelected === "rock") {
          setComputerScore(computerScore + 1);
          setCounter(counter + 1);
          return "The Computer Won";
        } else if (selected === "paper" && computerSelected === "rock") {
          setScore(score + 1);
          setCounter(counter + 1);
          return "Player 1 Won";
        } else if (selected === "paper" && computerSelected === "scissors") {
          setComputerScore(computerScore + 1);
          setCounter(counter + 1);
          return "The Computer Won";
        } else if (
          selected === computerSelected &&
          selected !== "" &&
          computerSelected !== ""
        ) {
          return "It was a tie.";
        }
      } else {
        return "Game Over.";
      }
    }
  }, [selected, computerSelected]);

  const rounds = useMemo(() => {
    if (score !== 3 && computerScore !== 3) {
      if (score > computerScore) {
        setRound(
          `Player is currently in the lead with ${score} wins. Player  has ${
            3 - score
          } rounds left to win!`
        );
      } else if (computerScore > score) {
        setRound(
          `The Computer is currently in the lead with ${computerScore} wins. The Computer has ${
            3 - computerScore
          } rounds left to win!`
        );
      } else if (
        score === computerScore &&
        score !== "" &&
        computerScore !== ""
      ) {
        setRound("The Player is Currntly Tied with the Computer");
      }
    } else {
      if (score === 3) {
        setRound("The Player has won the game.");
      } else if (computerScore === 3) {
        setRound("The Computer has won the game");
      }
    }
  }, [score, computerScore]);

  const nextRound = () => {
    setPlayer1("");
    setPlayer2("");
    setCounter(0);
  }

  const reset = () => {
    nextRound();
    setPlayer1Score(0);
    setPlayer2Score(0);
    setRound('');
  }
  return (
    <div>
      <div>
        <h1>
          {" "}
          Player Score: {score} Computer Score: {computerScore}
          {}
        </h1>
        <button onClick={() => setSelected("rock")}>rock</button>
        <button onClick={() => setSelected("paper")}>paper</button>
        <button onClick={() => setSelected("scissors")}>scissors</button>
      </div>
      <button onClick={play}>play</button>
      <p>your choice: {selected}</p>
      <p>computer's choice: {computerSelected}</p>
      <div>{result}</div>
      <p>{rounds}</p>
      <p>Please click play again to start a new round.</p>
      <button onClick={nextRound}>Next Round</button>
      <button onClick={reset}>Reset Game.</button>
    </div>
  );
}
