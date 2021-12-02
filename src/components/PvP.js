import React, { useMemo, useState } from "react";
import axios from "axios";
 
export default function PvP({
 player1Choice,
 player2Choice,
 level
}) {
 const [player1, setPlayer1] = useState("");
 const [player2, setPlayer2] = useState("");
 const [score,setScore] = useState({totalScore:0,player1Score:0,player2Score:0})
 // console.log(level)
 
 
  const result = useMemo(() => {
 
   if (player1 === "" || player2 === "") {
     return "";
   }
   if (player1 === player2) {
    
     return `it's a tie`;
   } else {
     if (
       (player1 === "rock" && player2 === "scissors") ||
       (player1 === "paper" && player2 === "rock") ||
       (player1 === "scissors" && player2 === "paper")
     ) {
    
       return "Player1 won";
     }
 
     return "Player2 won";
  
 
   }
 
 
 }, [player1, player2]);
 
 const choice1 = useMemo(() => {
   if (
     (player1 === "rock" || player1 === "paper" || player1 === "scissors") &&
     player2 === ""){
     return "";
   }
 
   else {
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
   setPlayer1('');
   setPlayer2('');
 }
 
 /*const scoreBoard = () => {
 
 
   let newScore = score.totalScore;
   let newPlayer1 = score.player1Score;
   let newPlayer2 = score.player2Score;
 
   if (player1 === player2) {
    
     console.log('no changes to score.')
   } else {
     if (
       (player1 === "rock" && player2 === "scissors") ||
       (player1 === "paper" && player2 === "rock") ||
       (player1 === "scissors" && player2 === "paper")
     ) {
    
       newScore++;
       newPlayer1++;
     }
 
     newScore++;
     newPlayer2++
  
   setScore({totalScore: newScore, player1Score: newPlayer1, player2Score: newPlayer2});
 }
 }*/
 
 return (
   <div>
     <div>
       <h1> Player1 Score: {(score.player1Score)} Player2 Score: {score.player2Score}</h1>
       <button onClick={() => setPlayer1("rock")}>rock</button>
       <button onClick={() => setPlayer1("paper")}>paper</button>
       <button onClick={() => setPlayer1("scissors")}>scissors</button>
     </div>
 
     <p>Player 1 Selected: {choice1}</p>
     <p>{choice1}</p>
 
     <div>
       <button onClick={() => setPlayer2("rock")}>rock</button>
       <button onClick={() => setPlayer2("paper")}>paper</button>
       <button onClick={() => setPlayer2("scissors")}>scissors</button>
     </div>
 
     <p>Player 2 Selected: {choice2}</p>
     <div>{result}</div>
     <button onClick={playAgain}>Play Again?</button>
   </div>
 );
}


