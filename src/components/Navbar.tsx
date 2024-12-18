import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import { keyframes } from '@mui/system';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import BuildIcon from '@mui/icons-material/Build';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const menuItems = [
  { name: 'home', icon: <HomeIcon /> },
  { name: 'about', icon: <PersonIcon /> },
  { name: 'projects', icon: <CodeIcon /> },
  { name: 'experience', icon: <WorkIcon /> },
  { name: 'skills', icon: <BuildIcon /> },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleMenuItemClick = () => {
    setOpen(false);
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{
        bgcolor: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.2)' : 'none',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <Toolbar sx={{ justifyContent: 'center', py: { xs: 1, md: 1.5 } }}>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, animation: `${fadeIn} 1s ease-out` }}>
          {menuItems.map((item) => (
            <Button 
              key={item.name}
              component={Link}
              to={item.name}
              smooth={true}
              duration={500}
              spy={true}
              onSetActive={() => setActiveSection(item.name)}
              sx={{ 
                color: scrolled ? 'primary.main' : 'white',
                fontSize: '0.95rem',
                fontWeight: 500,
                px: 2.5,
                py: 1,
                borderRadius: 2,
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '2px',
                  bgcolor: 'secondary.main',
                  transform: activeSection === item.name ? 'scaleX(1)' : 'scaleX(0)',
                  transition: 'transform 0.3s ease-in-out',
                  transformOrigin: 'left',
                },
                '&:hover': {
                  bgcolor: scrolled ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.1)',
                  '&::before': {
                    transform: 'scaleX(1)',
                  },
                },
              }}
            >
              {item.icon}
              {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            </Button>
          ))}
        </Box>

        {/* Mobile Menu */}
        <Box sx={{ display: { xs: 'flex', md: 'none' }, width: '100%', justifyContent: 'flex-end' }}>
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ 
              color: scrolled ? 'primary.main' : 'white',
              bgcolor: scrolled ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.1)',
              '&:hover': { 
                bgcolor: scrolled ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.2)',
              },
            }}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Box>

        <Drawer 
          anchor="right"
          open={open} 
          onClose={handleDrawerToggle}
          PaperProps={{ 
            sx: { 
              width: '280px',
              bgcolor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
            }
          }}
        >
          <List sx={{ pt: 8 }}>
            {menuItems.map((item) => (
              <ListItemButton 
                key={item.name}
                component={Link}
                to={item.name}
                smooth={true}
                duration={500}
                spy={true}
                onClick={handleMenuItemClick}
                sx={{ 
                  py: 2,
                  px: 3,
                  borderRadius: 2,
                  mx: 1,
                  mb: 1,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  '&:hover': { 
                    bgcolor: 'rgba(0, 0, 0, 0.04)',
                    '& .MuiListItemText-primary': {
                      color: 'secondary.main',
                    }
                  },
                  ...(activeSection === item.name && {
                    bgcolor: 'rgba(0, 0, 0, 0.04)',
                    '& .MuiListItemText-primary': {
                      color: 'secondary.main',
                      fontWeight: 600,
                    }
                  })
                }}
              >
                {item.icon}
                <ListItemText 
                  primary={item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  sx={{ 
                    '& .MuiListItemText-primary': {
                      fontSize: '1rem',
                      transition: 'color 0.3s ease',
                    }
                  }}
                />
              </ListItemButton>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
