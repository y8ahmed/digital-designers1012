import React, { useMemo, useState } from "react";
import axios from "axios";

export default function PvP({ myChoice, level }) {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [round, setRound] = useState("");
  let [selected1, setSelected] = useState(0);
  let [selected2, setSelected2] = useState(0);
  let [counter, setCounter] = useState(0);



  console.log(level);

  const result = useMemo(() => {
    setSelected(selected1++);
    setSelected2(selected2++);

    if (selected1 !== counter && selected2 !== counter) {
      if (player1Score !== 3 && player2Score !== 3) {
        if (player1 === "rock" && player2 === "scissors") {
          setPlayer1Score(player1Score + 1);
          setCounter(counter + 1);
          return "Player 1 Won";
        } else if (player1 === "rock" && player2 === "paper") {
          setPlayer1Score(player1Score + 1);
          setCounter(counter + 1);
          return "Player 2 Won";
        } else if (player1 === "scissors" && player2 === "paper") {
          setPlayer1Score(player1Score + 1);
          setCounter(counter + 1);
          return "Player 1 Won";
        } else if (player1 === "scissors" && player2 === "rock") {
          setPlayer2Score(player2Score + 1);
          setCounter(counter + 1);
          return "Player 2 Won";
        } else if (player1 === "paper" && player2 === "rock") {
          setPlayer1Score(player1Score + 1);
          setCounter(counter + 1);
          return "Player 1 Won";
        } else if (player1 === "paper" && player2 === "scissors") {
          setPlayer2Score(player2Score + 1);
          setCounter(counter + 1);
          return "Player 2 Won";
        } else if (player1 === player2 && player1 !== "" && player2 !== "") {
          return "It was a tie.";
        }
      } else {
        return "Game Over.";
      }
    }
  }, [player1, player2]);

  const rounds = useMemo(() => {
    if (player1Score !== 3 && player2Score !== 3) {
      if (player1Score > player2Score) {
        setRound(
          `Player 1 is Current in the lead with ${player1Score} wins. Player 1 has ${
            3 - player1Score
          } rounds left to win!`
        );
      } else if (player2Score > player1Score) {
        setRound(
          `Player 2 is Current in the lead with ${player2Score} wins. Player 2 has ${
            3 - player2Score
          } rounds left to win!`
        );
      } else if (
        player1Score === player2Score &&
        player1 !== "" &&
        player2 !== ""
      ) {
        setRound("Player 1 and Player 2 are currently tied.");
      }
    } else {
      if (player1Score === 3) {
        setRound("Player 1 has won the game.");
      } else if (player2Score === 3) {
        setRound("Player 2 has won the game");
      }
    }
  }, [player1Score, player2Score]);

  const choice1 = useMemo(() => {
    if (
      (player1 === "rock" || player1 === "paper" || player1 === "scissors") &&
      player2 === ""
    ) {
      return "";
    } else {
      return player1;
    }
  }, [player1, player2]);

  const choice2 = useMemo(() => {
    if (
      (player2 === "rock" || player2 === "paper" || player2 === "scissors") &&
      player1 === ""
    ) {
      return "";
    } else {
      return player2;
    }
  }, [player1, player2]);

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
          Player1 Score: {player1Score} Player2 Score: {player2Score}
          {}
        </h1>
        <button onClick={() => setPlayer1("rock")}>rock</button>
        <button onClick={() => setPlayer1("paper")}>paper</button>
        <button onClick={() => setPlayer1("scissors")}>scissors</button>
      </div>

      <p>Player 1 Selected: {choice1}</p>

      <div>
        <button onClick={() => setPlayer2("rock")}>rock</button>
        <button onClick={() => setPlayer2("paper")}>paper</button>
        <button onClick={() => setPlayer2("scissors")}>scissors</button>
      </div>

      <p>Player 2 Selected: {choice2}</p>
      <div>{result}</div>
      <p>{round}</p>
      <p>Please click next round to start a new round.</p>
      <button onClick={nextRound}>Next Round</button>
      <button onClick={reset}>Reset Game.</button>
    </div>
  );
}
