import { Box, Heading, List } from '@chakra-ui/react';
import './RulesSection.css';

function RulesSection() {
  return (
    <Box className="rules-section">
      <Heading as="h3" size="lg" className="rules-heading">
        How to Play
      </Heading>
      <List.Root className="rules-list">
        <List.Item>
          <strong>Select tiles</strong> to form words by clicking on the grid
        </List.Item>
        <List.Item>
          <strong>The path</strong> of the selected tiles does not matter!
        </List.Item>
        <List.Item>
          <strong>Click again</strong> on a selected tile to deselect it and all tiles after it
        </List.Item>
        <List.Item>
          <strong>Submit</strong> your word to add it to your guesses (max 5 words)
        </List.Item>
        <List.Item>
          <strong>Score points</strong> based on letter values - aim for the highest total!
        </List.Item>
        <List.Item>
          <strong>Beat your high score</strong> and challenge yourself with new letter combinations
        </List.Item>
      </List.Root>
    </Box>
  );
}

export default RulesSection;
