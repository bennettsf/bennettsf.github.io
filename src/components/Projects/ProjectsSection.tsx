import { Box, Grid, Heading } from '@chakra-ui/react';
import FullScreenSection from '../FullScreenSelection';
import type { Project } from '@/models/Project';
import projectsData from '@/data/projects.json';
import ProjectTags from './ProjectTags';
import ProjectCard from './ProjectCard';
import { useSelectedTags } from '@/context/SelectedTagsContext';

const ProjectsSection = () => {
  const { selectedTags } = useSelectedTags();
  // order projects by featured status
  const projects = [...projectsData].sort((a, b) =>
    b.featured === a.featured ? 0 : b.featured ? 1 : -1
  ) as Project[];

  const filteredProjects =
    selectedTags.includes('All') || selectedTags.length === 0
      ? projects
      : projects.filter((project) => project.tags.some((tag) => selectedTags.includes(tag)));

  return (
    <FullScreenSection textAlign="center" py={16} id="projects-section" width="100%" display="flex">
      <Heading size={{ md: '4xl', sm: '3xl' }}>Featured Projects</Heading>
      <ProjectTags />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-evenly"
        gap={8}
        maxWidth="80%"
        width="100%"
      >
        {/* Render project cards here using the projects state */}
        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Grid>
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
