import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import About from './components/About';
// index.tsx or App.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './components/Projects/Projects';
// import Contact from './components/Contact';
import Box from '@mui/material/Box';

const theme = createTheme({
  typography: {
    fontFamily: 'Public Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  palette: {
    primary: {
      main: '#24272B', // Adjust the primary color
    },
    secondary: {
      main: '#f0a500',
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Box>
        <Home/>
        <About />
        <Projects />
        {/* <Contact /> */}
      </Box>
    </ThemeProvider>
  );
};

export default App;
