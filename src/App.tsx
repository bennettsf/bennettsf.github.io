import { Box } from '@chakra-ui/react';
import Header from './components/Header/Header';
import LandingSection from './components/Landing/LandingSection';
import ProjectsSection from './components/Projects/ProjectsSection';
import { WordGuessesProvider } from './context/WordGuessesContext';
import { SelectedTilesProvider } from './context/SelectedTilesContext';
import { SelectedTagsProvider } from './context/SelectedTagsContext';
import backgroundImage from '@/assets/mt_ranier_milkyway.webp';
import WordGameSection from './components/WordGame/WordGameSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <WordGuessesProvider>
      <SelectedTilesProvider>
        <Box
          position="relative"
          minHeight="100vh"
          _before={{
            content: '""',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            zIndex: -2,
          }}
          _after={{
            content: '""',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: { base: 'white', _dark: '#242424' },
            opacity: 0.8,
            zIndex: -1,
          }}
        >
          <Header />
          <LandingSection />
          <SelectedTagsProvider>
            <ProjectsSection />
          </SelectedTagsProvider>
          <WordGameSection />
          <Footer />
        </Box>
      </SelectedTilesProvider>
    </WordGuessesProvider>
  );
}

export default App;
