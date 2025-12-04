import React, { createContext, useContext, useState } from 'react';

interface WordGuessesContextType {
  guesses: { word: string; points: number }[];
  addGuess: (guess: string, points: number) => void;
  resetGuesses: () => void;
  pointTotal: number;
  highScore: number;
  setHighScore: React.Dispatch<React.SetStateAction<number>>;
}
const WordGuessesContext = createContext<WordGuessesContextType | undefined>(undefined);

export const WordGuessesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [guesses, setGuesses] = useState<{ word: string; points: number }[]>([]);
  const pointTotal = guesses.reduce((total, guess) => total + guess.points, 0);
  const [highScore, setHighScore] = useState(
    Number(localStorage.getItem('wordGameHighScore')) || 0
  );

  const addGuess = (guess: string, points: number) => {
    setGuesses((prevGuesses) => [...prevGuesses, { word: guess, points: points }]);
    const newTotal = pointTotal + points;
    if (newTotal > highScore) {
      setHighScore(newTotal);
      localStorage.setItem('wordGameHighScore', newTotal.toString());
    }
  };

  const resetGuesses = () => {
    setGuesses([]);
  };
  return (
    <WordGuessesContext.Provider
      value={{ guesses, addGuess, resetGuesses, pointTotal, highScore, setHighScore }}
    >
      {children}
    </WordGuessesContext.Provider>
  );
};

export const useWordGuesses = (): WordGuessesContextType => {
  const context = useContext(WordGuessesContext);
  if (!context) {
    throw new Error('useWordGuesses must be used within a WordGuessesProvider');
  }
  return context;
};
