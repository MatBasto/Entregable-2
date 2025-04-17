import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [openDrawer, setOpenDrawer] = useState(false);

  const links = [
    { to: '/', label: '🐉 Home' },
    { to: '/filter/Male', label: 'Masculino' },
    { to: '/filter/Female', label: 'Femenino' },
    { to: '/about', label: 'Acerca de' },
  ];

  return (
    <AppBar position="sticky" className="nav-bar">
      <Toolbar className="nav-toolbar">
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => setOpenDrawer(true)}
              sx={{ ml: 1 }}
            >
              <MenuIcon />
            </IconButton>

            <Drawer
              anchor="left"
              open={openDrawer}
              onClose={() => setOpenDrawer(false)}
              PaperProps={{
                sx: { background: '#ff8c00', color: 'white' },
              }}
            >
              <List>
                {links.map((link) => (
                  <ListItem key={link.to} disablePadding>
                    <ListItemButton
                      component={Link}
                      to={link.to}
                      selected={location.pathname === link.to}
                      onClick={() => setOpenDrawer(false)}
                    >
                      <ListItemText primary={link.label} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 3 }}>
            {links.map((link) => (
              <Button
                key={link.to}
                component={Link}
                to={link.to}
                className={`nav-button ${location.pathname === link.to ? 'active' : ''}`}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
