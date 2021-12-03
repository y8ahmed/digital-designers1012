import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import PvP from "./components/PvP.js";
import PvE from "./components/PvE.js";
import Lucky from "./components/LuckyMode.js";

const Main = ({ type, setType, level, setLevel, gameMode, setGameMode }) => {
  return (
    <div className="App">
      <section>
        <h2> Rock Paper Siccors By Yusuf Ahmed and Harib Bin Shahbaz</h2>
      </section>
      <section>
        <h3>Choose game mode (Player vs Player or Computer)</h3>

        <button onClick={() => setType(0)}>Player vs Player</button>
        <button onClick={() => setType(1)}>Player vs Computer</button>

        {type === 1 ? (
          <>
            <h3>Choose Game Mode</h3>
            <button onClick={() => setLevel(0)}>Easy</button>
            <button onClick={() => setLevel(1)}>Hard</button>
            {level !== null ? (
              <>
                <br />
                <br />

                <Link to={"/pve"}>
                  <h3>Start Game (Player vs Computer)</h3>
                </Link>
                <p>{level}</p>
              </>
            ) : null}
          </>
        ) : null}

        {type === 0 ? (
          <>
            <h3>Choose Game Mode</h3>
            <button onClick={() => setGameMode(0)}>Player vs Player</button>
            <button onClick={() => setGameMode(1)}>We Feeling Lucky</button>
            {gameMode !== null ? (
              <>
                <br />
                <br />

                <Link to={"/pvp"}>
                  <h3>Start Game (Player vs Player)</h3>
                </Link>
                <Link to={"/lucky"}>
                  <h3>Start Game (We Feeling Lucky)</h3>
                </Link>
              </>
            ) : null}
          </>
        ) : null}
      </section>
      <section>
        <h3>Game Information</h3>
        <h4>____________________________________________________</h4>
        <h3>Game rules</h3>
        <h4>____________________________________________________</h4>
      </section>
    </div>
  );
};

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
