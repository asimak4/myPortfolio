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

  const menuItems = ['home', 'about', 'projects', 'experience', 'contact'];

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, justifyContent: 'center' }}>
          {menuItems.map((item) => (
            <Button key={item} color="inherit">
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
          <Drawer anchor="top" open={open} onClose={handleDrawerToggle}>
            <List>
              {menuItems.map((item) => (
                <ListItemButton key={item} onClick={() => setOpen(false)}>
                  <Link to={item} smooth={true} duration={500}>
                    <ListItemText primary={item.charAt(0).toUpperCase() + item.slice(1)} />
                  </Link>
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
