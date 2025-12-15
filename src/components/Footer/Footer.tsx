import { Box, Text } from '@chakra-ui/react';

function Footer() {
  return (
    <Box
      as="footer"
      textAlign="center"
      py={4}
      mt={8}
      mx={5}
      borderTop="1px solid"
      borderColor="gray.200"
      display="flex"
      justifyContent="space-between"
    >
      <Text>© {new Date().getFullYear()} Bennett Fife. All rights reserved.</Text>
      <Text>Built with React and Chakra UI.</Text>
    </Box>
  );
}

export default Footer;
