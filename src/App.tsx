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
import { Analytics } from '@vercel/analytics/react';

const theme = createTheme({
  typography: {
    fontFamily: '"Manrope", sans-serif',
    h1: {
      fontFamily: '"Bodoni Moda", Georgia, serif',
      fontWeight: 500,
      letterSpacing: '-0.055em',
    },
    h2: {
      fontFamily: '"Bodoni Moda", Georgia, serif',
      fontWeight: 500,
      letterSpacing: '-0.045em',
    },
    h3: {
      fontFamily: '"Bodoni Moda", Georgia, serif',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.75,
    },
    overline: {
      fontFamily: '"IBM Plex Mono", monospace',
      fontWeight: 500,
      letterSpacing: '0.18em',
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#F3EFE4',
      light: '#FFFFFF',
      dark: '#A9ADA5',
    },
    secondary: {
      main: '#5B7FD0',
      light: '#91ABEA',
      dark: '#2D4C92',
    },
    text: {
      primary: '#F3EFE4',
      secondary: '#A9ADA5',
    },
    background: {
      default: '#090C0B',
      paper: '#101513',
    },
  },
  shape: {
    borderRadius: 2,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          backgroundColor: '#090C0B',
        },
        body: {
          backgroundColor: '#090C0B',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          textTransform: 'none',
          fontWeight: 600,
          letterSpacing: '-0.01em',
          padding: '10px 22px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          boxShadow: 'none',
          background: '#101513',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: '#101513',
          color: '#F3EFE4',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(243, 239, 228, 0.22)',
            },
            '&:hover fieldset': {
              borderColor: '#5B7FD0',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#A9ADA5',
          },
          '& .MuiOutlinedInput-input': {
            color: '#F3EFE4',
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
          bgcolor: 'background.default',
          color: 'text.primary',
          position: 'relative',
          isolation: 'isolate',
          '&::before': {
            content: '""',
            position: 'fixed',
            inset: 0,
            zIndex: -2,
            pointerEvents: 'none',
            backgroundImage: `
              linear-gradient(rgba(243, 239, 228, 0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(243, 239, 228, 0.035) 1px, transparent 1px)
            `,
            backgroundSize: '72px 72px',
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 38%)',
          },
          '&::after': {
            content: '""',
            position: 'fixed',
            width: '52vw',
            height: '52vw',
            right: '-22vw',
            top: '-24vw',
            zIndex: -1,
            pointerEvents: 'none',
            borderRadius: '50%',
            background: 'rgba(91, 127, 208, 0.12)',
            filter: 'blur(120px)',
          },
        }}
      >
        <Navbar />
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Home />
          <About />
          <Projects />
          <Experience />
          <SkillsPage />
        </Box>
      </Box>
      <Analytics />
    </ThemeProvider>
  );
};

export default App;
