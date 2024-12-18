import React from 'react';
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
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box 
        sx={{ 
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2D3436 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(4, 180, 231, 0.1) 0%, rgba(0, 248, 130, 0.05) 50%, transparent 100%)',
            pointerEvents: 'none',
          },
          '&::after': {
            content: '""',
            position: 'fixed',
            top: '50%',
            left: '50%',
            width: '200vw',
            height: '200vh',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle at center, transparent 0%, transparent 18%, rgba(9, 132, 227, 0.03) 20%, transparent 22%, transparent 28%, rgba(9, 132, 227, 0.03) 30%, transparent 32%), radial-gradient(circle at center, transparent 0%, transparent 38%, rgba(9, 132, 227, 0.03) 40%, transparent 42%, transparent 48%, rgba(9, 132, 227, 0.03) 50%, transparent 52%)',
            backgroundSize: '100px 100px',
            animation: 'rotate 60s linear infinite',
            pointerEvents: 'none',
            opacity: 0.5,
          },
          '& .particle': {
            position: 'fixed',
            width: '4px',
            height: '4px',
            background: 'rgba(9, 132, 227, 0.2)',
            borderRadius: '50%',
            pointerEvents: 'none',
          },
          '@keyframes rotate': {
            '0%': {
              transform: 'translate(-50%, -50%) rotate(0deg)',
            },
            '100%': {
              transform: 'translate(-50%, -50%) rotate(360deg)',
            },
          },
          '& .grid-pattern': {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            pointerEvents: 'none',
          },
          '& .corner': {
            position: 'fixed',
            width: '200px',
            height: '200px',
            pointerEvents: 'none',
            '&.top-left': {
              top: 0,
              left: 0,
              background: 'radial-gradient(circle at top left, rgba(9, 132, 227, 0.1) 0%, transparent 70%)',
            },
            '&.top-right': {
              top: 0,
              right: 0,
              background: 'radial-gradient(circle at top right, rgba(9, 132, 227, 0.1) 0%, transparent 70%)',
            },
            '&.bottom-left': {
              bottom: 0,
              left: 0,
              background: 'radial-gradient(circle at bottom left, rgba(9, 132, 227, 0.1) 0%, transparent 70%)',
            },
            '&.bottom-right': {
              bottom: 0,
              right: 0,
              background: 'radial-gradient(circle at bottom right, rgba(9, 132, 227, 0.1) 0%, transparent 70%)',
            },
          },
        }}
      >
        <Box className="grid-pattern" />
        
        <Box className="corner top-left" />
        <Box className="corner top-right" />
        <Box className="corner bottom-left" />
        <Box className="corner bottom-right" />
        
        <Navbar />
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Home />
          <About />
          <Projects />
          <Experience />
          <SkillsPage />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
