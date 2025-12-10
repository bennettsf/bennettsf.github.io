import type { Project } from '@/models/Project';
import { Box, GridItem, Heading, Text } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { useColorModeValue } from '../ui/color-mode';
import './ProjectCard.css';

function ProjectCard({ project }: { project: Project }) {
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('black', 'white');

  return (
    <GridItem
      colSpan={{ base: 1, md: project.featured ? 2 : 1 }}
      backgroundColor={cardBg}
      display="flex"
      flexWrap="wrap"
    >
      <Box
        style={{ borderWidth: '2px', borderColor: textColor }}
        className="project-card"
        position="relative"
      >
        <Box className="project-content">
          <Heading size={{ md: 'lg' }}>{project.title}</Heading>
          <Text>{project.description}</Text>
          <Text className="project-technologies" fontSize="sm">
            Technologies:{' '}
            {[...project.technologies.languages, ...project.technologies.frameworks].join(', ')}
          </Text>
        </Box>
        <Box
          position="absolute"
          bottom={4}
          right={4}
          transition="all 0.2s ease-in-out"
          _hover={{
            borderColor: 'teal.500',
            transform: 'translateY(-2px)',
          }}
        >
          <a href={project.links.github} target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} color={textColor} />
          </a>
        </Box>
      </Box>
    </GridItem>
  );
}

export default ProjectCard;
