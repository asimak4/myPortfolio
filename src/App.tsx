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
    mode: 'light',
    primary: {
      main: '#2D3436',
      light: '#636E72',
      dark: '#1E272E',
    },
    secondary: {
      main: '#0984E3',
      light: '#74B9FF',
      dark: '#0652DD',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F5F6FA',
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
        },
      },
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Experience />
        <SkillsPage />
      </Box>
    </ThemeProvider>
  );
};

export default App;
