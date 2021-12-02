import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link 
} from 'react-router-dom';
import './App.css';
import PvP from './components/PvP.js';
import PvE from './components/PvE.js';

const Main = ({type, setType, level, setLevel}) => {
  return (
    <div className="App">
      <section> 
        <h2> Rock Paper Siccors By Yusuf Ahmed and Harib Bin Shahbaz</h2>
      </section>
      <section> 
        
        <h3>Choose game mode (Player vs Player or Player vs Computer)</h3>

          <button onClick={() => setType(0)}>Player vs Player</button>
          <button onClick={() => setType(1)}>Player vs Computer</button>

          {type == 1
            ? <>
              <h3>Choose Difficulty</h3>
              <button onClick={() => setLevel(0)}>Easy</button>
              <button onClick={() => setLevel(1)}>Hard</button>
              {level !== null
                ? <>
                  <br /><br />
                  <Link to={"/pve"}><h3>Start Game (Player vs Computer)</h3></Link>
                  <p>{level}</p>
                </>
                : null
              } 
            </> 
            : null
          }

          {type == 0
            ? <>
            <br /><br />
            <Link to={"/pvp"}><h3>Start Game (Player vs Player)</h3></Link>       
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

function App() {
  const [myChoice, setMyChoice] = useState("");
  const [score, setScore] = useState(0);
  let [type, setType] = useState(null)
  let [level, setLevel] = useState(null)

  return (
    <Router>
      <Routes>
          <Route exact path='/' element={<Main type={type} setType={setType} level={level} setLevel={setLevel} />} />
          <Route exact path='/pvp' element={<PvP />} />
          <Route exact path='/pve' element={<PvE myChoice={myChoice} score={score} setScore={setScore} level={level} />} />
      </Routes>
    </Router>
  );
}

export default App;
