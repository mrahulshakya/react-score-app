import React, { useState } from 'react';
import { Game } from "./Game";
import { HighScores } from './HighScores';
export const StarMatch = () => {
  const [gameId, setGameId] = useState(1);
  return (
  <>
  <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />
  <HighScores />
  </>);
};


