import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import PvP from "./components/PvP.js";
import PvE from "./components/PvE.js";
import Lucky from "./components/LuckyMode.js";
import Secret from "./components/Secret.js"
import Main from "./components/Main.js"

function App() {
  const [myChoice, setMyChoice] = useState("");
  const [score, setScore] = useState(0);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  let [type, setType] = useState(null);
  let [level, setLevel] = useState(null);
  let [gameMode, setGameMode] = useState(null);

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Main
              type={type}
              setType={setType}
              level={level}
              setLevel={setLevel}
              setGameMode={setGameMode}
              gameMode={gameMode}
            />
          }
        />
        <Route exact path="/pvp" element={<PvP />} />
        <Route exact path="/lucky" element={<Lucky />} />
        <Route exact path="/secret" element={<Secret />} />
        <Route
          exact
          path="/pve"
          element={
            <PvE
              myChoice={myChoice}
              score={score}
              setScore={setScore}
              level={level}
              player1Score={player1Score}
              setPlayer1Score={setPlayer1Score}
              setPlayer2Score={setPlayer2Score}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
