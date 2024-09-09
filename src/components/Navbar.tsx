import React from 'react';
import { Link } from 'react-scroll';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const Navbar: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleMenuItemClick = () => {
    setOpen(false); // Close the drawer
  };

  const menuItems = ['home', 'about', 'projects', 'experience', 'skills'];

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, justifyContent: 'center' }}>
          {menuItems.map((item) => (
            <Button 
              key={item} 
              color="inherit" 
              sx={{ 
                mx: 1, 
                '&:hover': { 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)' // Light hover effect
                }
              }}
            >
              <Link to={item} smooth={true} duration={500}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </Button>
          ))}
        </Box>
        <Box sx={{ display: { xs: 'flex', sm: 'none' }, justifyContent: 'space-between', width: '100%' }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Drawer 
            anchor="top" 
            open={open} 
            onClose={handleDrawerToggle} 
            PaperProps={{ 
              sx: { 
                backgroundColor: '#333', // Dark background for drawer
                color: '#fff', // White text color
                paddingTop: '60px', // Adjust padding to avoid overlap with AppBar
              }
            }}
          >
            <List>
              {menuItems.map((item) => (
                <ListItemButton 
                  key={item} 
                  onClick={() => {
                    handleMenuItemClick(); // Close the drawer
                    // Ensure the smooth scroll behavior works
                    document.querySelector(`#${item}`)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  sx={{ 
                    py: 2, // Padding for list items
                    '&:hover': { 
                      backgroundColor: '#444' // Darker hover effect
                    }
                  }}
                >
                  <ListItemText primary={item.charAt(0).toUpperCase() + item.slice(1)} />
                </ListItemButton>
              ))}
            </List>
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
