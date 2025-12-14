import { Box, Heading } from '@chakra-ui/react';
import FullScreenSection from '../FullScreenSelection';
import RulesSection from './RulesSection';
import { GuessesSection } from './GuessSection';
import WordGame from './WordGame';

const WordGameSection = () => {
  return (
    <FullScreenSection
      maxW="1280px"
      textAlign="center"
      alignItems="center"
      py={4}
      id="word-game-section"
    >
      <Box display="flex" flexDirection="column" justifyContent="space-evenly" p={5} gap={5}>
        <Heading size={{ md: '4xl', sm: '3xl' }}>Word Game</Heading>
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
        >
          <GuessesSection />
          <WordGame />
        </Box>
      </Box>
    </FullScreenSection>
  );
};

export default WordGameSection;
