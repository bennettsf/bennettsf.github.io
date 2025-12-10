import { useSelectedTags } from '@/context/SelectedTagsContext';

import { getTopTags } from '@/hooks/getTopTags';
import { Box, Stack, Tag } from '@chakra-ui/react';
import React from 'react';
import { HiPlus } from 'react-icons/hi';

function ProjectTags({}) {
  const { selectedTags, setSelectedTags } = useSelectedTags();
  const topTags = getTopTags();
  const tags = ['All', ...topTags];

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const tag = e.currentTarget.innerText;
    if (tag === 'All') {
      setSelectedTags(['All']);
      return;
    }

    // add tag and remove "All" or remove tag and add "All" if no tags left
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags.filter((t) => t !== 'All'), tag]);
    } else {
      const newTags = selectedTags.filter((t) => t !== tag);
      setSelectedTags(newTags.length === 0 ? ['All'] : newTags);
    }
  };

  return (
    <Box>
      <Stack
        direction="row"
        gap={2}
        overflowX="auto"
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
      >
        {tags.map((tag) => (
          <Tag.Root
            key={tag}
            size="lg"
            colorPalette={!selectedTags.includes(tag) ? 'teal' : 'gray'}
            variant="solid"
            onClick={handleClick}
          >
            <Tag.StartElement>
              <HiPlus />
            </Tag.StartElement>
            <Tag.Label>{tag}</Tag.Label>
          </Tag.Root>
        ))}
      </Stack>
    </Box>
  );
}

export default ProjectTags;
