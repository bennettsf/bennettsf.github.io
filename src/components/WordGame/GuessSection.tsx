import { Box, Heading } from '@chakra-ui/react';
import { useColorMode } from '../ui/color-mode';
import { useWordGuesses } from '@/context/WordGuessesContext';

export function GuessesSection() {
  const { guesses, pointTotal, highScore } = useWordGuesses();
  const { colorMode } = useColorMode();
  const storedHighScore = localStorage.getItem('wordGameHighScore');

  return (
    <Box minW="250px" m="5px" display="flex" flexDirection="column" textAlign="center">
      <Heading as="h2" mb={4}>
        {guesses.length}/5 Guesses:
      </Heading>
      <Box
        width="100%"
        flex="1"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        px={2}
      >
        <Box display="flex" flexDirection="column" gap={2}>
          {guesses.map((guess, index) => (
            <Box
              key={guess.word + index}
              p={2}
              border={`1px solid ${colorMode === 'light' ? 'black' : 'white'}`}
              borderRadius="md"
              fontSize="lg"
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Box>{guess.word}</Box>
              <Box>{guess.points}</Box>
            </Box>
          ))}
        </Box>
        <Box>
          <Box>Total: {pointTotal}</Box>
          <Box>Highscore: {storedHighScore ? storedHighScore : highScore}</Box>
        </Box>
      </Box>
    </Box>
  );
}
