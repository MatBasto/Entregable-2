import React from 'react';
import { Box, Typography } from '@mui/material';
import './Header.css';

const Header = () => {
  return (
    <Box className="custom-header">
      <img
        src="https://web.dragonball-api.com/images-compress/logo_dragonballapi.webp"
        alt="Dragon Ball API Logo"
        className="logo-img"
      />
      <Typography variant="h5" className="subtitulo" sx={{ mt: 2 }}>
      <strong>The Dragon Ball</strong> <span className="highlight">API</span>
      </Typography>
    </Box>
  );
};

export default Header;