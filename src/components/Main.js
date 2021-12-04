import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Box } from '@chakra-ui/react'

export default function Main({ type, setType, level, setLevel, gameMode, setGameMode }) {
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

            <Link to={"/pvp"}>
              <h3>Start Game (Player vs Player)</h3>
            </Link>
            <Link to={"/lucky"}>
              <h3>Start Game (We Feeling Lucky)</h3>
            </Link>
            <Link to={"/secret"}>
               <h3>Secret Game Mode</h3>
            </Link>

        
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
