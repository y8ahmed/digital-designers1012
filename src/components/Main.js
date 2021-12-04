import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Box, Text, Button } from '@chakra-ui/react'
import { Center } from '@chakra-ui/react'
import { Stack, HStack, VStack, StackDivider } from '@chakra-ui/react'

export default function Main({ type, setType, level, setLevel, gameMode, setGameMode }) {
  return (
    <div className="App">
        <Center h='100vh'>
            <VStack divider={<StackDivider borderColor='gray.200' />} spacing={4} align='stretch'>
                    <section>
                        <Box p={3} m={3} border="2px" borderColor="teal.500" borderRadius="5" w='xl'>
                            <Text fontSize='xl'>Rock Paper Siccors</Text>
                            <Text fontSize='md'>By Yusuf Ahmed and Harib Bin Shahbaz</Text>
                        </Box>            
                    </section>

                    <section>
                    <Box p={3} m={3} border="2px" borderColor="teal.500" borderRadius="5" w='xl'>
                        <VStack spacing={4} align='center'>
                            <Text fontSize='md' pb="2%" >Choose game mode (Player vs Player or Computer)</Text>

                            <Stack spacing={4} direction='row' align='center'>
                                <Button onClick={() => setType(0)}>Player vs Player</Button>
                                <Button onClick={() => setType(1)}>Player vs Computer</Button>
                            </Stack>

                            {type === 1 ? (
                            <>
                                <Text fontSize='md' pb="2%" >Choose Game Mode:</Text>

                                <Stack spacing={4} direction='row' align='center'>
                                    <Button onClick={() => setLevel(0)}>Easy</Button>
                                    <Button onClick={() => setLevel(1)}>Hard</Button>
                                </Stack>
                                {level !== null ? (
                                <>
                                    <Link to={"/pve"}>
                                        <Button mt="5%" colorScheme='teal' size='sm' >Start Game (Player vs Computer)</Button>
                                    </Link>
                                </>
                                ) : null}
                            </>
                            ) : null}

                            {type === 0 ? (
                            <>
                                <Text fontSize='sm' pb="2%" >Choose Game Mode:</Text>

                                <Link to={"/pvp"}>
                                    <Button colorScheme='teal' size='sm' >Start Game (Player vs Player)</Button>   
                                </Link>

                                <Link to={"/lucky"}>
                                    <Button colorScheme='teal' size='sm' >Start Game (We Feeling Lucky)</Button>
                                </Link>

                                <Link to={"/secret"}>
                                    <Button colorScheme='teal' size='sm' >Secret Game Mode)</Button>
                                </Link> 
                            </>
                            ) : null} 
                        </VStack>           
                    </Box>  
                </section>
                <section>
                    <Box p={3} m={3} border="2px" borderColor="teal.500" borderRadius="5" w='xl'>
                        <h3>Game Information:</h3>
                        <h4>Rock paper scissors is a hand game, usually played between two people, which each player simultaneously forms one of three shapes with an outstretched hand. These shapes are "rock" (a closed fist), "paper" (a flat hand), and "scissors" (hand forming a V).</h4>
                    </Box>
                </section>
                <section>
                    <Box p={3} m={3} border="2px" borderColor="teal.500" borderRadius="5" w='xl'>
                        <h3>Game rules:</h3>
                        <h4>Rules: Players start each round by saying, “rock, paper, scissors, shoot!” On “shoot,” each player holds out their fist for rock, flat hand for paper, or their index and middle finger for scissors. Rock crushes scissors, scissors cut paper, and paper covers rock.</h4>
                    </Box>
                </section>
            </VStack>
        </Center>
    </div> 

  );
};
