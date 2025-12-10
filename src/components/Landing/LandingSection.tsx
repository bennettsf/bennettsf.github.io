import { Image, Box, Text } from '@chakra-ui/react';
import FullScreenSection from '../FullScreenSelection';
import { useTypewriter } from '@/hooks/useTypewriter';
import './LandingSection.css';
import profile_pic from '@/assets/bennettProfilePic.png';

const welcomeText = 'Welcome to My Portfolio!';
const secondLineText = "I'm Bennett, a Full-Stack Developer";

const LandingSection = () => {
  const firstLine = useTypewriter({ text: welcomeText, speed: 70 });
  const secondLine = useTypewriter({
    text: secondLineText,
    speed: 50,
    startDelay: firstLine.isComplete ? 0 : 999999,
  });

  const slideInDelayedClass = secondLine.isComplete ? 'slide-in-left' : 'slide-in-hidden';
  // const slideInClass = secondLine.isComplete ? 'slide-in-left-delayed' : 'slide-in-hidden';
  const slideInRightClass = secondLine.isComplete ? 'slide-in-right' : 'slide-in-right-hidden';

  return (
    <FullScreenSection id="home-section">
      <Box
        pt="72px"
        w="100%"
        minH="100vh"
        display="flex"
        flexDirection={{ base: 'column', lg: 'row' }}
        justifyContent="center"
        alignContent="center"
        overflow="hidden"
      >
        <Box
          className="introduction"
          m="20px"
          height="100%"
          display="flex"
          flexDirection="column"
          gap={51}
        >
          <Text fontSize="2xl" className="typewriter ">
            {firstLine.displayedText}
          </Text>
          <Text fontSize="5xl" fontWeight="bold">
            {secondLine.displayedText}
            {secondLine.isComplete && <span className="char-blink">.</span>}
          </Text>
          <Box display="flex" flexDirection="column" gap={10}>
            <Text className={slideInDelayedClass} fontSize="xl" maxWidth="600px">
              I'm from <strong>Seattle, WA</strong> and some of my interests include{' '}
              <strong>coding</strong>, <strong>gaming</strong>, <strong>movies</strong>, and{' '}
              <strong>baseball</strong>.
            </Text>
            <Text className={slideInDelayedClass} fontSize="xl" maxWidth="600px">
              I specialize in building web applications using modern technologies like{' '}
              <strong>React</strong>, <strong>Node.js</strong>, and <strong>TypeScript</strong>
              .{' '}
            </Text>
            <Text className={slideInDelayedClass} fontSize="xl" maxWidth="600px">
              Below, you can find some of the <u>projects</u> I've worked on as well as a fun{' '}
              <u>word game</u> I built!
            </Text>
            <Text className={slideInDelayedClass} fontSize="xl" maxWidth="600px">
              Feel free to reach out to me through any of my socials above!
            </Text>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Box
            className={slideInRightClass}
            display="flex"
            alignItems="center"
            justifyContent="center"
            m="20px"
          >
            <Image
              src={profile_pic}
              alt="Bennett's Profile Picture"
              borderRadius="full"
              boxSize="400px"
              border="2px solid #14b8a6"
            />
          </Box>
        </Box>
      </Box>
    </FullScreenSection>
  );
};

export default LandingSection;
