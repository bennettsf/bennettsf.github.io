import { Box, Text } from '@chakra-ui/react';
import FullScreenSection from '../FullScreenSelection';
import { useTypewriter } from '@/hooks/useTypewriter';
import './LandingSection.css';
import { GuessesSection } from '../WordGame/GuessSection';
import WordGame from '../WordGame/WordGame';

const descriptionText =
  'I specialize in building web applications using modern technologies like React, Node.js, and TypeScript.';
const welcomeText = 'Welcome to My Portfolio !';
const secondLineText = "I'm Bennett, a Full-Stack Developer";

const LandingSection = () => {
  const firstLine = useTypewriter({ text: welcomeText, speed: 70 });
  const secondLine = useTypewriter({
    text: secondLineText,
    speed: 50,
    startDelay: firstLine.isComplete ? 0 : 999999,
  });

  return (
    <FullScreenSection id="home-section" alignItems="stretch">
      <Box
        pt="72px"
        w="100%"
        minH="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box
          className="introduction"
          alignSelf="flex-start"
          m="20px"
          display="flex"
          flexDirection="column"
          gap={4}
        >
          <Text fontSize="2xl" className="typewriter ">
            {firstLine.displayedText}
          </Text>
          <Text fontSize="5xl" fontWeight="bold">
            {secondLine.displayedText}
            {secondLine.isComplete && <span className="char-blink">.</span>}
          </Text>
          <Text
            className={secondLine.isComplete ? 'description' : 'description-hidden'}
            fontSize="xl"
            maxWidth="600px"
          >
            {descriptionText}
          </Text>
        </Box>
        <Box className="word-game" display="flex" gap={4} alignItems="stretch">
          <GuessesSection />
          <WordGame />
        </Box>
      </Box>
    </FullScreenSection>
  );
};

export default LandingSection;
