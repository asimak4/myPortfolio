import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from '@mui/material/Box';
import SkillsPage from './components/Skills/SkillsPage';
import CssBaseline from '@mui/material/CssBaseline';
import { Fade } from '@mui/material';
import { Analytics } from '@vercel/analytics/react';

type SectionType = 'home' | 'about' | 'projects' | 'experience' | 'skills';

const theme = createTheme({
  typography: {
    fontFamily: '"Inter", "Public Sans", -apple-system, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.7,
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFFFFF',
      light: '#ECEFF4',
      dark: '#E5E9F0',
    },
    secondary: {
      main: '#0984E3',
      light: '#74B9FF',
      dark: '#0652DD',
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.85)',
    },
    background: {
      default: 'transparent',
      paper: 'rgba(255, 255, 255, 0.1)',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
          padding: '8px 24px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          color: '#FFFFFF',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.3)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.5)',
            },
          },
          '& .MuiInputLabel-root': {
            color: 'rgba(255, 255, 255, 0.7)',
          },
          '& .MuiOutlinedInput-input': {
            color: '#FFFFFF',
          },
        },
      },
    },
  },
});

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionType>('home');

  const handleSectionChange = (section: SectionType) => {
    setActiveSection(section);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home onSectionChange={handleSectionChange} />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'experience':
        return <Experience />;
      case 'skills':
        return <SkillsPage />;
      default:
        return <Home onSectionChange={handleSectionChange} />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #1D2B34 0%, #151C20 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Navbar 
          activeSection={activeSection} 
          onSectionChange={handleSectionChange} 
        />
        <Box sx={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
          <Fade in={true} timeout={500} key={activeSection}>
            <Box sx={{ minHeight: '100vh' }}>
              {renderSection()}
            </Box>
          </Fade>
        </Box>
      </Box>
      <Analytics />
    </ThemeProvider>
  );
};

export default App;
