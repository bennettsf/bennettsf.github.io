import { Box, Button, Grid } from '@chakra-ui/react';
import { useColorMode } from '../ui/color-mode';
import { useState } from 'react';
import { useWordGuesses } from '@/context/WordGuessesContext';
import { FaArrowRotateLeft } from 'react-icons/fa6';
import { useSelectedTiles } from '@/context/SelectedTilesContext';
import { randomLetters } from '@/utils/wordGame';
import Tiles from './Tiles';

function WordGame() {
  // create 5x5 Chakra UI Grid for word game
  const { selectedTiles, setSelectedTiles } = useSelectedTiles();
  const [letters] = useState(() => randomLetters());
  const { colorMode } = useColorMode();
  const { guesses, addGuess, resetGuesses } = useWordGuesses();

  const handleSubmit = () => {
    if (guesses.length >= 5 || selectedTiles.length === 0) {
      return;
    }
    const guess = selectedTiles.map((tile) => tile.letter);
    console.log('Submitted guess:', guess);
    const pointValue = selectedTiles.reduce((total, tile) => total + tile.points, 0);
    // convert selected tiles to a string and add to guesses context
    const guessString = guess.join('');
    addGuess(guessString, pointValue);

    // Calculate new total including this guess

    setSelectedTiles([]);
  };

  return (
    <Box display="flex" flexDirection="column" gap={5} alignItems="center" height="100%">
      <Grid templateColumns="repeat(5, 1fr)" templateRows="repeat(5, 1fr)" gap={2}>
        <Tiles letters={letters} />
      </Grid>
      <Box display="flex" gap={2}>
        <Button variant={colorMode === 'dark' ? 'ghost' : 'solid'} onClick={handleSubmit}>
          Submit
        </Button>
        <Button variant={colorMode === 'dark' ? 'ghost' : 'solid'} onClick={resetGuesses}>
          <FaArrowRotateLeft />
        </Button>
      </Box>
    </Box>
  );
}

export default WordGame;
