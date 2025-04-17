import React from 'react';
import { Box, Typography } from '@mui/material';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box component="footer" className="custom-footer">
      <Typography variant="body2" className="footer-text">
        🐲 Design by: <strong>Mateo Augusto Basto Olaya y Damary Andrea Montealegre Caldon</strong> | {year}
      </Typography>
      <Typography variant="caption" className="footer-note">
        Proyecto académico - Programación Web
      </Typography>
    </Box>
  );
};

export default Footer;
