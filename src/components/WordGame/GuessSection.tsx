import { Box, Text } from '@chakra-ui/react';
import { useColorMode } from '../ui/color-mode';
import { useWordGuesses } from '@/context/WordGuessesContext';

export function GuessesSection() {
  const { guesses, pointTotal, highScore } = useWordGuesses();
  const { colorMode } = useColorMode();
  const storedHighScore = localStorage.getItem('wordGameHighScore');

  return (
    <Box minWidth="250px" display="flex" flexDirection="column" textAlign="center" gap={5}>
      <Text fontSize="xl" fontWeight="bold" color={guesses.length === 5 ? 'green.400' : ''}>
        Selected Words: {guesses.length}/5
      </Text>
      {/* Guesses - takes up remaining space */}
      <Box flex="1" display="flex" flexDirection="column" gap={2} overflowY="auto" px={2}>
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
      {/* Totals - fixed at bottom */}
      <Box display="flex" flexDirection="column" px={2} pt={2}>
        <Text fontSize="lg" fontWeight="bold">
          Total: {pointTotal}
        </Text>
        <Text fontSize="lg" fontWeight="bold">
          Highscore: {storedHighScore ? storedHighScore : highScore}
        </Text>
      </Box>
    </Box>
  );
}
