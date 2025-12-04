import { useSelectedTiles } from '@/context/SelectedTilesContext';
import { useColorMode } from '../ui/color-mode';
import { Box, GridItem } from '@chakra-ui/react';

interface TilesProps {
  letters: string[][];
}

function Tiles({ letters }: TilesProps) {
  const { colorMode } = useColorMode();
  const { selectedTiles, setSelectedTiles } = useSelectedTiles();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const key = e.currentTarget.getAttribute('data-key') || '';
    const letter = e.currentTarget.querySelector('.letter')?.textContent?.toLowerCase() || '';
    const points = parseInt(e.currentTarget.querySelector('.point')?.textContent || '0');

    setSelectedTiles((prev) => {
      const existingIndex = prev.findIndex((tile) => tile.key === key);
      let newSelection;
      if (existingIndex !== -1) {
        // Remove if already selected (esists)
        // unselect any tiles ahead of it as well
        newSelection = prev.slice(0, existingIndex);
      } else {
        // Add to end if not selected
        newSelection = [...prev, { key, letter, points }];
      }

      return newSelection;
    });
  };

  const tiles = [];
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      const letter = letters[i * 5 + j][0];
      const point = letters[i * 5 + j][1];
      const tileKey = `${i}-${j}`;
      const isSelected = selectedTiles.some((tile) => tile.key === tileKey);

      tiles.push(
        <GridItem
          key={tileKey}
          data-key={tileKey}
          border={`2px solid ${colorMode === 'light' ? 'black' : 'white'}`}
          borderRadius="md"
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="4xl"
          width="60px"
          height="60px"
          bg={isSelected ? '#646CFF' : 'transparent'}
          transition="background-color 0.2s ease-in-out"
          _hover={{
            bg: '#646CFF',
          }}
          boxShadow="3px 4px 3px 0 rgba(0, 0, 0, 0.25)"
          cursor="pointer"
          onClick={handleClick}
          userSelect="none"
        >
          <Box className="letter">{letter.toUpperCase()}</Box>
          <Box className="point" position="absolute" bottom="2px" right="4px" fontSize="xs">
            {point}
          </Box>
        </GridItem>
      );
    }
  }
  return tiles;
}
export default Tiles;
