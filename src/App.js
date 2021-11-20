import React, { useState } from 'react';
import './App.css';

function App() {
  let [type, setType] = useState(null)
  let [level, setLevel] = useState(null)
  
  return (
    <div className="App">
      <section> 
        <h2> Rock Paper Siccors By Yusuf Ahmed and Harib Bin Shahbaz</h2>
      </section>
      <section> 
        
        <h3>Choose game mode (Player vs Player or Computer)</h3>

          <button onClick={() => setType(0)}>Player vs Player</button>
          <button onClick={() => setType(1)}>Player vs Computer</button>

          {type == 1
            ? <>
              <h3>Choose Difficulty</h3>
              <button onClick={() => setLevel(0)}>Easy</button>
              <button onClick={() => setLevel(1)}>Hard</button>
              <br /><br />
              <button> Start Game (Player vs Computer)</button>
            </> 
            : null
          }

          {type == 0
            ? <>
            <br /><br />
            <button> Start Game (Player vs Player)</button>            
            </> 
            : null
          }
      </section>
      <section> 
          <h3>Game Information</h3>
          <h4>____________________________________________________</h4>
          <h3>Game rules</h3>
          <h4>____________________________________________________</h4>
      </section>
    </div>
  );
}

export default App;
