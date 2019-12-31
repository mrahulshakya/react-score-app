import React, { useState, useEffect } from 'react';
import { Game } from "./Game";
import { HighScores } from './HighScores';
import axios from 'axios';

export const StarMatch = () => {
  const [gameId, setGameId] = useState(1);
  const [started, setStarted] = useState(false);
  const [scores, setScores] = useState([]);
   const [scoreLoaded, setScoreLoaded] = useState(false);
  
    useEffect( () => {
        if (!scoreLoaded) {
         axios.get("http://localhost:5000/scores")
         .then(res => {
             console.log('response from the api', res.data.scores);
             setScores(res.data.scores);
         }).catch(e => console.log(e))
         .finally(() => setScoreLoaded(true));
        }
      });

  
  const handleStartOfGame = (event, score) => {
      console.log(event);
    event.preventDefault();
    setGameId(gameId + 1);
    setStarted(true);
    if(!scores.some(x=> x.userId === score.userId)){
        setScores([...scores, score]);
    }
  };

  return (
  <>
  <Game key={gameId} startNewGame={handleStartOfGame} started = {started}/>
  <HighScores scores = { scores}/>
  </>);
};


