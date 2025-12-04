import { Box, VStack } from '@chakra-ui/react';
import type { StackProps } from '@chakra-ui/react';
import React, { type ReactNode } from 'react';
import { useColorModeValue } from './ui/color-mode';

interface FullScreenSectionProps extends StackProps {
  children: ReactNode;
  maxW?: string;
}

/**
 * FullScreenSection
 * - Wraps content in a full viewport height section
 * - Sets background/text color according to color mode
 * - Passes additional Chakra props via spread operator
 */
const FullScreenSection: React.FC<FullScreenSectionProps> = ({ children, maxW, ...boxProps }) => {
  const bg = useColorModeValue('gray.50', 'gray.800');
  const color = useColorModeValue('black', 'white');

  return (
    <VStack
      bg={bg}
      color={color}
      {...boxProps} // still passes any extra props from parent
    >
      <Box minHeight="100vh" maxW={maxW ? maxW : ''} gap={8}>
        {children}
      </Box>
    </VStack>
  );
};

export default FullScreenSection;
