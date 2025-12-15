import { Box, Text } from '@chakra-ui/react';
import { useColorModeValue } from '../ui/color-mode';
import './Footer.css';

function Footer() {
  const colorMode = useColorModeValue('black', 'white');

  return (
    <Box as="footer" className="footer" borderColor={colorMode} color={colorMode}>
      <Text>© {new Date().getFullYear()} Bennett Fife. All rights reserved.</Text>
      <Text>Built with React and Chakra UI.</Text>
    </Box>
  );
}

export default Footer;
