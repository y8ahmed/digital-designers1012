import React, { useMemo, useState } from "react";
import axios from "axios";

export default function Lucky({ myChoice, level }) {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [round, setRound] = useState("");

  const feelingLucky1 = () => {
    let random = Math.floor(Math.random() * 3) + 1
    if (random === 1){
      setPlayer1('rock');
    }
    else if(random === 2){
      setPlayer1('paper');
    }
    else if(random === 3){
      setPlayer1('scissors')
    }
    
  }

  const feelingLucky2 = () =>{
    let random = Math.floor(Math.random() * 3) + 1
    if (random === 3){
      setPlayer2('rock');
    }
    else if(random === 2){
      setPlayer2('paper');
    }
    else if (random === 1){
      setPlayer2('scissors')
    }
    
  }

  
  console.log(player1)
  console.log(player2)




  const result = useMemo(() => {
    if (player1Score !== 3 && player2Score !== 3) {
      if (player1 === "rock" && player2 === "scissors") {
        setPlayer1Score(player1Score + 1);
        return "Player 1 Won";
      } else if (player1 === "rock" && player2 === "paper") {
        setPlayer1Score(player1Score + 1);
        return "Player 2 Won";
      } else if (player1 === "scissors" && player2 === "paper") {
        setPlayer1Score(player1Score + 1);
        return "Player 1 Won";
      } else if (player1 === "scissors" && player2 === "rock") {
        setPlayer2Score(player2Score + 1);
        return "Player 2 Won";
      } else if (player1 === "paper" && player2 === "rock") {
        setPlayer1Score(player1Score + 1);
        return "Player 1 Won";
      } else if (player1 === "paper" && player2 === "scissors") {
        setPlayer2Score(player2Score + 1);
        return "Player 2 Won";
      } else if (player1 === player2 && player1 !== "" && player2 !== "") {
        return "It was a tie.";
      }
    } else {
      return "Game Over.";
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

  const playAgain = () => {
    setPlayer1("");
    setPlayer2("");
    //setPlayer1Score(0);
    //setPlayer2Score(0)
    //setRound('');
  };

  return (
    <div>
      <div>
        <h1>
          {" "}
          Player1 Score: {player1Score} Player2 Score: {player2Score}
          {}
        </h1>
        <button onClick={feelingLucky1}>Player 1: Test your Luck</button>

      </div>

      <p>Player 1 Selected: {choice1}</p>
      

      <div>
        <button onClick={feelingLucky2}>Player 2: Test Your Luck</button>
      </div>

      <p>Player 2 Selected: {choice2}</p>
      <div>{result}</div>
      <p>{round}</p>
      <p>Please click play again to start a new round.</p>
      <button onClick={playAgain}>Play Again?</button>
    </div>
  );
}
