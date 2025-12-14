import React, { useEffect, useRef, useState, type JSX } from 'react';
import { Box, Link as ChakraLink } from '@chakra-ui/react';
import { FiMail } from 'react-icons/fi'; // envelope
import {
  FaCode,
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaBars,
  FaTimes,
  FaGamepad,
} from 'react-icons/fa';
import { LuMoon, LuSun } from 'react-icons/lu';
import { useColorMode } from '../ui/color-mode';
import './Header.css';

interface Social {
  icon: JSX.Element;
  name: string;
  url: string;
}

interface NavLink {
  icon: JSX.Element;
  name: string;
  label: string;
  text: string;
}

const iconSize = 36;
const fontSize = 'xl';

const colors = {
  text: 'teal.500',
  textHover: 'teal.200',
};

const navLinks: NavLink[] = [
  { icon: <FaHome size={iconSize} />, name: 'home', label: 'home', text: 'Home' },
  { icon: <FaCode size={iconSize} />, name: 'projects', label: 'projects', text: 'Projects' },
  { icon: <FaGamepad size={iconSize} />, name: 'word-game', label: 'word-game', text: 'Word Game' },
];

const socials: Social[] = [
  { icon: <FiMail size={iconSize} />, name: 'email', url: 'mailto:bennett.fife@gmail.com' },
  { icon: <FaGithub size={iconSize} />, name: 'github', url: 'https://github.com/bennettsf' },
  {
    icon: <FaLinkedin size={iconSize} />,
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/bennett-fife',
  },
  {
    icon: <FaInstagram size={iconSize} />,
    name: 'instagram',
    url: 'https://www.instagram.com/bennettsf_/',
  },
];

const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const headerRef = useRef<HTMLDivElement | null>(null);
  const prevScrollY = useRef(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Hide header on scroll down, show on scroll up
  const handleScroll = () => {
    const current = window.scrollY;
    if (!headerRef.current) {
      prevScrollY.current = current;
      return;
    }
    headerRef.current.style.transform =
      current > prevScrollY.current ? 'translateY(-200px)' : 'translateY(0)';
    prevScrollY.current = current;
  };

  useEffect(() => {
    prevScrollY.current = window.scrollY;
    if (headerRef.current) headerRef.current.style.transform = 'translateY(0)';
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (anchor: string) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close menu after navigation
  };

  return (
    <Box
      ref={headerRef}
      position="fixed"
      insetX={0}
      top={0}
      zIndex={10}
      backgroundColor={colorMode === 'dark' ? 'gray.800' : 'gray.50'}
      opacity={0.75}
      transition="transform 0.3s ease-in-out"
    >
      <nav className="container">
        <Box className="social-container" gap={2}>
          {socials.map((social) => (
            <div key={social.url} className={social.name}>
              <ChakraLink
                target="_blank"
                href={social.url}
                color={colors.text}
                _hover={{ color: colors.textHover }}
                transition="color 0.2s ease-in-out"
              >
                {social.icon}
              </ChakraLink>
            </div>
          ))}
        </Box>
        <Box
          className={`nav-container ${isMenuOpen ? 'open' : ''}`}
          backgroundColor={
            isMenuOpen
              ? colorMode === 'dark'
                ? 'rgba(26, 32, 44, 0.95)'
                : 'rgba(247, 250, 252, 0.95)'
              : 'none'
          }
          gap={8}
        >
          {navLinks.map((navLink) => (
            <div key={navLink.label} className={navLink.name}>
              <ChakraLink
                color={colors.text}
                fontSize={fontSize}
                _hover={{ color: colors.textHover }}
                transition="color 0.2s ease-in-out"
                onClick={handleClick(navLink.label)}
              >
                {navLink.icon}
                {navLink.text}
              </ChakraLink>
            </div>
          ))}
          <ChakraLink>
            {colorMode === 'dark' ? (
              <LuMoon size={iconSize} onClick={toggleColorMode} />
            ) : (
              <LuSun size={iconSize} onClick={toggleColorMode} />
            )}
          </ChakraLink>
        </Box>
        {/* Hamburger button - only visible on extra small screens */}
        <button
          className="hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          style={{ color: '#14b8a6' }}
        >
          {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </nav>
    </Box>
  );
};

export default Header;
