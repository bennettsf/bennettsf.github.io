import { Box } from '@chakra-ui/react';
import FullScreenSection from '../FullScreenSelection';
import RulesSection from './RulesSection';
import { GuessesSection } from './GuessSection';
import WordGame from './WordGame';
import { useColorMode } from '../ui/color-mode';

const WordGameSection = () => {
  const { colorMode } = useColorMode();
  return (
    <FullScreenSection id="word-game-section">
      <Box display="flex" flexDirection="column" justifyContent="space-evenly" p={5} gap={5}>
        <RulesSection />
        <Box
          className="word-game"
          display="flex"
          flexDirection={{ md: 'row', sm: 'column' }}
          justifyContent="space-evenly"
          gap={4}
          p={6}
          border="2px solid #14b8a6"
          borderRadius="md"
          bg={colorMode === 'light' ? 'gray.50' : 'gray.800'}
        >
          <GuessesSection />
          <WordGame />
        </Box>
      </Box>
    </FullScreenSection>
  );
};

export default WordGameSection;
