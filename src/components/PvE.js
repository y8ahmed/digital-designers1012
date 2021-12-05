import React, { useMemo, useState } from "react";
import axios from "axios";

import Paper from "../hands/Paper";
import Rock from "../hands/Rock";
import Scissor from "../hands/Scissor";

import { 
  Box, Text, 
  Button, Center,
  Flex, HStack, 
  VStack, StackDivider
} from '@chakra-ui/react'

export default function PvE({ myChoice, level }) {
  let [selected, setSelected] = useState("");
  let [computerSelected, setComputedSelected] = useState("");

  let [score, setScore] = useState(0);
  let [computerScore, setComputerScore] = useState(0);

  let [playerIndicator, setPlayerIndicator] = useState(0);
  let [computerIndicator, setComputerIndicator] = useState(0);

  let [indicator , setIndicator] = useState(0);
  let [round, setRound] = useState("");

  let [count , setCount] = useState(1);
  let [tie , setTie] = useState(0);

  let [gameover, setGameOver] = useState(false);

  const play = () => {
    level = level === null ? 1 : level;
    if (!selected) {
      return;
    }
    if (level === 0) {
      axios.get(`/easy`).then((res) => {
        console.log("hello")
        setComputedSelected(res.data.move);
      });
    } if (level === 1) {
      axios.get(`/hard`, { params: { selected: selected } }).then((res) => {
        console.log("bye")
        setComputedSelected(res.data.move);
      });
    }
  };

  const result = useMemo(() => {
    setPlayerIndicator(playerIndicator++);
    setComputerIndicator(computerIndicator++);
    if (playerIndicator !== indicator  && computerIndicator !== indicator ) {
      if (score !== 3 && computerScore !== 3) {
        if (selected === "rock" && computerSelected === "scissors") {
          setScore(score + 1);
          setIndicator(indicator  + 1);
          setCount(count+1) 
          return "Player 1 Won";
        } else if (selected === "rock" && computerSelected === "paper") {
          setComputerScore(computerScore + 1);
          setIndicator(indicator  + 1);
          setCount(count+1) 
          return "The Computer Won";
        } else if (selected === "scissors" && computerSelected === "paper") {
          setScore(score + 1);
          setIndicator(indicator  + 1);
          setCount(count+1) 
          return "Player 1 Won";
        } else if (selected === "scissors" && computerSelected === "rock") {
          setComputerScore(computerScore + 1);
          setIndicator(indicator  + 1);
          setCount(count+1) 
          return "The Computer Won";
        } else if (selected === "paper" && computerSelected === "rock") {
          setScore(score + 1);
          setIndicator(indicator  + 1);
          setCount(count+1) 
          return "Player 1 Won";
        } else if (selected === "paper" && computerSelected === "scissors") {
          setComputerScore(computerScore + 1);
          setIndicator(indicator  + 1);
          setCount(count+1) 
          return "The Computer Won";
        } else if (
          selected === computerSelected &&
          selected !== "" &&
          computerSelected !== ""
        ) {
          setTie(tie+1)
          setCount(count+1)
          return "It was a tie.";
        }
      } else {
        setGameOver(true)
        return "Game Over. (Click 'Reset Game' to play again )";
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
    setSelected("");
    setComputedSelected("");
    setIndicator(0);
  }

  const reset = () => {
    nextRound();
    setScore(0);
    setComputerScore(0);
    setRound('');
    setCount(1);
  }
  
  return (
      <Center h='100vh'>
        <VStack divider={<StackDivider borderColor='gray.200' />} spacing={4} align='stretch'>
          <section>
          <Box p={3} m={3} border="2px" borderColor="teal.500" borderRadius="5" w='xl'>
              <Text fontSize='lg' align='center'>Round: {count}</Text>
              <Text fontSize='md' align='center'>Player Score: {score} Computer Score: {computerScore} Tie: {tie}</Text>
          </Box>   
          </section>
          <section>
          <Flex>
            <Box flex='1'>
              <Text fontSize='lg' align='center'>Player</Text>
              <Box p={3} m={3} border="2px" borderColor="teal.500" borderRadius="5">
                <Box h="75" align="center">
                  { selected == "rock" ? (
                      <Rock width="60" color="#319795"/>
                    ) : ( selected == "paper" ? (
                        <Paper width="60" color="#319795"/>
                      ) : ( selected == "scissors" ? (
                        <Scissor width="60" color="#319795"/>
                      ) : (
                        null
                      )
                      )
                    )   
                  }
                </Box>
                <Box h="25%" align="center" >
                  <HStack spacing='2%' m="2" >
                    <Button onClick={() => setSelected("rock")}><Rock width="40" color="#319795"/></Button>
                    <Button onClick={() => setSelected("paper")}><Paper width="40" color="#319795"/></Button>
                    <Button onClick={() => setSelected("scissors")}><Scissor width="40" color="#319795"/></Button>
                  </HStack>
                </Box>
              </Box>
            </Box>
            <Box flex='1'>
            <Text fontSize='lg' align='center'>Computer</Text>
              <Box p={3} m={3} border="2px" borderColor="teal.500" borderRadius="5">
                <Box h="75" align="center">
                  { computerSelected == "rock" ? (
                          <Rock width="60" color="#808080"/>
                        ) : ( computerSelected == "paper" ? (
                            <Paper width="60" color="#808080"/>
                          ) : ( computerSelected == "scissors" ? (
                            <Scissor width="60" color="#808080"/>
                          ) : (
                            null
                          )
                          )
                        )   
                      }
                </Box>
                <HStack spacing='2%' m="2" h="25%">
                    <Button isDisabled={true} onClick={() => {setSelected("rock")}}><Rock width="40" color="#808080"/></Button>
                    <Button isDisabled={true} onClick={() => {setSelected("paper")}}><Paper width="40" color="#808080"/></Button>
                    <Button isDisabled={true} onClick={() => {setSelected("scissors")}}><Scissor width="40" color="#808080"/></Button>
                </HStack>
               </Box> 
            </Box>
          </Flex> 
          <HStack justifyContent="center" spacing='2%'>
            <Button onClick={play} align="center">Play</Button>  
            <Button onClick={nextRound} align="center">Next round</Button>
          </HStack>  
          </section>
          <section>
            <Text fontSize='md' textAlign="center">Remember to click 'play' after selecting Rock Paper or Scissor
            <br />
            then click 'Next round' to start the second after you click 'play'</Text>
            <Text fontSize='md' textAlign="center">{rounds}</Text>
          </section>

          <section>
          <VStack justifyContent="center" spacing='2%'>
            <Text fontSize='md' textAlign="center">{result}</Text>
            {
              gameover == true ? (
                <Button align="center" onClick={reset}>Reset Game.</Button>
              ) : null
            } 
          </VStack> 
          </section>
        </VStack>
      </Center>
  );
}
