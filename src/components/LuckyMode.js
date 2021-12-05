import React, { useMemo, useState } from "react";

import Mystery from "../hands/Mystery";
import Paper from "../hands/Paper";
import Rock from "../hands/Rock";
import Scissor from "../hands/Scissor";

import { 
  Box, Text, 
  Button, Center,
  Flex, HStack, 
  VStack, StackDivider
} from '@chakra-ui/react'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'

export default function Lucky({ myChoice, level }) {
  let { isOpen, onOpen, onClose } = useDisclosure()

  
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [round, setRound] = useState("");

  let [selected1, setSelected] = useState(0);
  let [selected2, setSelected2] = useState(0);

  let [indicator , setIndicator] = useState(0);
  let [count, setCount] = useState(1);

  let [gameover, setGameOver] = useState(false);
  let [tie, setTie] = useState(0);

  const feelingLucky1 = () => {
    let isOpen = true
    console.log(isOpen)
    let random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {
      setPlayer1("rock");
    } else if (random === 2) {
      setPlayer1("paper");
    } else if (random === 3) {
      setPlayer1("scissors");
    }
  };

  const feelingLucky2 = () => {
    let random = Math.floor(Math.random() * 3) + 1;
    if (random === 3) {
      setPlayer2("rock");
    } else if (random === 2) {
      setPlayer2("paper");
    } else if (random === 1) {
      setPlayer2("scissors");
    }
  };

  const result = useMemo(() => {
    setSelected(selected1++);
    setSelected2(selected2++);

    if (selected1 !== indicator && selected2 !== indicator) {
      if (player1Score !== 3 && player2Score !== 3) {
        if (player1 === "rock" && player2 === "scissors") {
          setPlayer1Score(player1Score + 1);
          setIndicator(indicator + 1);
          setCount(count+1)
          return "Player 1 Won";
        } else if (player1 === "rock" && player2 === "paper") {
          setPlayer1Score(player1Score + 1);
          setIndicator(indicator + 1);
          setCount(count+1)
          return "Player 2 Won";
        } else if (player1 === "scissors" && player2 === "paper") {
          setPlayer1Score(player1Score + 1);
          setIndicator(indicator + 1);
          setCount(count+1)
          return "Player 1 Won";
        } else if (player1 === "scissors" && player2 === "rock") {
          setPlayer2Score(player2Score + 1);
          setIndicator(indicator + 1);
          setCount(count+1)
          return "Player 2 Won";
        } else if (player1 === "paper" && player2 === "rock") {
          setPlayer1Score(player1Score + 1);
          setIndicator(indicator + 1);
          setCount(count+1)
          return "Player 1 Won";
        } else if (player1 === "paper" && player2 === "scissors") {
          setPlayer2Score(player2Score + 1);
          setIndicator(indicator + 1);
          setCount(count+1)
          return "Player 2 Won";
        } else if (player1 === player2 && player1 !== "" && player2 !== "") {
          setCount(count+1)
          setTie(tie+1)
          return "It was a tie.";
        }
      } else {
        setGameOver(true)
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
    setIndicator(0);
  }

  const reset = () => {
    nextRound();
    setPlayer1Score(0);
    setPlayer2Score(0);
    setRound('');
    setCount(1);
  }

  return (
    <Center h='100vh'>
    <VStack divider={<StackDivider borderColor='gray.200' />} spacing={4} align='stretch'>
      <section>
      <Box p={3} m={3} border="2px" borderColor="teal.500" borderRadius="5" w='xl'>
          <Text fontSize='lg' align='center'>Round: {count}</Text>
          <Text fontSize='md' align='center'>Player 1 Score: {player1Score} / Player 2 Score: {player2Score} / Tie: {tie}</Text>
      </Box>   
      </section>
      <section>
      <Flex>
        <Box flex='1'>
          <Text fontSize='lg' align='center'>Player 1</Text>
          <Box p={3} m={3} border="2px" borderColor="teal.500" borderRadius="5">
            <Box h="75" align="center">
              { choice1 == "rock" ? (
                  <Rock width="60" color="#319795"/>
                ) : ( choice1 == "paper" ? (
                    <Paper width="60" color="#319795"/>
                  ) : ( choice1 == "scissors" ? (
                    <Scissor width="60" color="#319795"/>
                  ) : (
                    null
                  )
                  )
                )   
              }
            </Box>
            <HStack justifyContent="center" spacing='2%' m="2" h="25%">
              <Button onClick={feelingLucky1}>
                <Mystery width="40" color="#319795"/>
              </Button>
            </HStack>
          </Box>
        </Box>
        <Box flex='1'>
        <Text fontSize='lg' align='center'>Player 2</Text>
          <Box p={3} m={3} border="2px" borderColor="teal.500" borderRadius="5">
            <Box h="75" align="center">
              { choice2 == "rock" ? (
                      <Rock width="60" color="#808080"/>
                    ) : ( choice2 == "paper" ? (
                        <Paper width="60" color="#808080"/>
                      ) : ( choice2 == "scissors" ? (
                        <Scissor width="60" color="#808080"/>
                      ) : (
                        null
                      )
                      )
                    )   
                  }
            </Box>
            <HStack justifyContent="center" spacing='2%' m="2" h="25%">
                <Button onClick={feelingLucky2}>
                  <Mystery width="40" color="#319795"/>
                </Button>
            </HStack>
           </Box> 
        </Box>
      </Flex> 
      <HStack justifyContent="center" spacing='2%'>
        <Button align="center" onClick={nextRound} align="center">Next round</Button>
      </HStack>  
      </section>
      <section>
        <Text fontSize='md' textAlign="center"> Welcome to the lucky game mode! Here you test and yout
        <br />
        friend, test your luck in rock paper scissors</Text>
        <Text fontSize='md' textAlign="center">{rounds}</Text>
      </section>

      <section>
      <VStack justifyContent="center" spacing='2%'>
        <Text fontSize='md' textAlign="center" color='tomato'>{result}</Text>
        {
          gameover == true ? ( <>
            <Button align="center" onClick={reset}><Text fontSize='md' color='tomato'>Reset Game</Text></Button>
          </>) : null
        } 
      </VStack> 
      </section>
    </VStack>
  </Center>
  );
}

