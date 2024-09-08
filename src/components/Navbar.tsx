import React from 'react';
import { Link } from 'react-scroll';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Navbar: React.FC = () => {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
        <Button color="inherit">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
