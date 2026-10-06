import React, { useEffect, useState } from 'react';
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
import { keyframes } from '@mui/system';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import BuildIcon from '@mui/icons-material/Build';
import Typography from '@mui/material/Typography';
import { SECTIONS, scrollToSection, SectionType } from '../utils/scroll';
import { userEmail } from './About/aboutMe';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const menuItems = [
  { name: 'home' as const, icon: <HomeIcon /> },
  { name: 'about' as const, icon: <PersonIcon /> },
  { name: 'projects' as const, icon: <CodeIcon /> },
  { name: 'experience' as const, icon: <WorkIcon /> },
  { name: 'skills' as const, icon: <BuildIcon /> },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionType>('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPos = window.scrollY + 100;
      let current: SectionType = 'home';
      for (const section of SECTIONS) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPos) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleSectionClick = (section: SectionType) => {
    setOpen(false);
    scrollToSection(section);
  };

  return (
    <AppBar 
      position="fixed"
      elevation={0}
      color="transparent"
      sx={{
        bgcolor: scrolled ? 'rgba(9, 12, 11, 0.82)' : 'transparent',
        backgroundImage: 'none',
        boxShadow: 'none',
        borderBottom: scrolled
          ? '1px solid rgba(243, 239, 228, 0.1)'
          : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(18px)' : 'none',
        transition: 'background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out',
      }}
    >
      <Toolbar
        sx={{
          width: '100%',
          maxWidth: 1280,
          mx: 'auto',
          px: { xs: 2.5, md: 5 },
          py: { xs: 1, md: 1.5 },
          justifyContent: 'space-between',
        }}
      >
        <Box
          onClick={() => handleSectionClick('home')}
          role="button"
          tabIndex={0}
          aria-label="Go to home section"
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              handleSectionClick('home');
            }
          }}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            cursor: 'pointer',
            animation: `${fadeIn} 0.8s ease-out`,
          }}
        >
          <Box
            sx={{
              width: 34,
              height: 34,
              border: '1px solid',
              borderColor: 'secondary.main',
              borderRadius: '50%',
              display: 'grid',
              placeItems: 'center',
              color: 'secondary.main',
              fontFamily: '"Bodoni Moda", serif',
              fontSize: '0.9rem',
              fontStyle: 'italic',
            }}
          >
            AS
          </Box>
          <Typography
            sx={{
              display: { xs: 'none', sm: 'block' },
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: '0.68rem',
              letterSpacing: '0.12em',
              color: 'text.secondary',
              lineHeight: 1.35,
            }}
          >
            ALEXANDER SIMAK
            <br />
            SOFTWARE ENGINEER
          </Typography>
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, animation: `${fadeIn} 1s ease-out` }}>
          {menuItems.map((item) => (
            <Button 
              key={item.name}
              onClick={() => handleSectionClick(item.name)}
              sx={{ 
                color: activeSection === item.name ? 'primary.main' : 'text.secondary',
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: '0.7rem',
                letterSpacing: '0.08em',
                fontWeight: 500,
                px: 1.8,
                py: 1,
                borderRadius: 0,
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  width: activeSection === item.name ? '16px' : 0,
                  height: '1px',
                  bgcolor: 'secondary.main',
                  transform: 'translateX(-50%)',
                  transition: 'width 0.3s ease-in-out',
                },
                '&:hover': {
                  color: 'primary.main',
                  bgcolor: 'transparent',
                  '&::before': {
                    width: '16px',
                  },
                },
              }}
            >
              {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            </Button>
          ))}
        </Box>

        <Box
          component="a"
          href={`mailto:${userEmail}`}
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            gap: 1,
            color: 'text.secondary',
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '0.66rem',
            letterSpacing: '0.08em',
            textDecoration: 'none',
            transition: 'color 0.2s ease',
            '&:hover': { color: 'primary.main' },
          }}
        >
          <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: 'secondary.main', boxShadow: '0 0 12px #5B7FD0' }} />
          {userEmail.toUpperCase()}
        </Box>

        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            onClick={handleDrawerToggle}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            sx={{ 
              color: 'primary.main',
              border: '1px solid rgba(243, 239, 228, 0.18)',
              '&:hover': { 
                bgcolor: 'rgba(91, 127, 208, 0.1)',
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
              bgcolor: '#0D110F',
              color: 'primary.main',
              borderLeft: '1px solid rgba(243, 239, 228, 0.12)',
            }
          }}
        >
          <List sx={{ pt: 8 }}>
            {menuItems.map((item) => (
              <ListItemButton 
                key={item.name}
                onClick={() => handleSectionClick(item.name)}
                sx={{ 
                  py: 2,
                  px: 3,
                  borderRadius: 2,
                  mx: 1,
                  mb: 1,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  color: 'text.secondary',
                  '&:hover': { 
                    bgcolor: 'rgba(91, 127, 208, 0.1)',
                    '& .MuiListItemText-primary': {
                      color: 'secondary.light',
                    }
                  },
                  ...(activeSection === item.name && {
                    bgcolor: 'rgba(91, 127, 208, 0.1)',
                    '& .MuiListItemText-primary': {
                      color: 'secondary.light',
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
