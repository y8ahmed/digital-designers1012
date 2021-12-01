import React, { useMemo, useState } from "react";
import axios from 'axios';

export default function PvE({myChoice, score, setScore, level}) {
    const [selected, setSelected] = useState("");
    const [computedSelected, setComputedSelected] = useState("");
    // console.log(level)

    const play = () => {
        // call backend and get the difficulty
        console.log(level)
        if (!selected) {
            return;
        }
        if (level === 0) {
            axios.get(`/easy`).then(res => {
                setComputedSelected(res.data.move);
            })  
        } else if (level === 1) {
            axios.get(`/hard`, { params: { selected: selected }}).then(res => {
                setComputedSelected(res.data.move);
            }) 
        }
    };

    const result = useMemo(() => {
      if (computedSelected === selected) {
        return `it's a tie`;
      } else {
        if (
          (computedSelected === "rock" && selected === "scissors") ||
          (computedSelected === "paper" && selected === "rock") ||
          (computedSelected === "scissors" && selected === "paper")
        ) {
          return "computer won";
        }
        return "player won";
      }
    }, [computedSelected, selected]);

    return (
      <div>
        <div>
          <button onClick={() => setSelected("rock")}>rock</button>
          <button onClick={() => setSelected("paper")}>paper</button>
          <button onClick={() => setSelected("scissors")}>scissors</button>
        </div>
        <button onClick={play}>play</button>
        <p>your choice: {selected}</p>
        <p>computer's choice: {computedSelected}</p>
        <div>{result}</div>
      </div>
    );
}
