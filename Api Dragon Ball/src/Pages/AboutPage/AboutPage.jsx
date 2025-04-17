import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <Box className="about-container">
      <Typography variant="h4" className="about-title" gutterBottom>
        Acerca de
      </Typography>

      <Divider sx={{ mb: 2, backgroundColor: '#ff8c00' }} />

      <Typography className="about-line"><strong>Nombres:</strong> Mateo Augusto Basto Olaya y Damary Andrea Montealegre Caldon</Typography>
      <Typography className="about-line"><strong>Correos:</strong> mat.basto@udla.edu.co - da.montealegre@udla.edu.co</Typography>
      <Typography className="about-line"><strong>Carrera:</strong> Ingeniería de Sistemas</Typography>
      <Typography className="about-line"><strong>Universidad:</strong> Universidad de la Amazonia</Typography>

      <Typography className="about-desc">
        Esta aplicación fue desarrollada en equipo como parte del curso de Programación Web, utilizando React, Vite, Material UI y la API pública de personajes de Dragon Ball. El objetivo fue crear una app moderna, funcional y visualmente atractiva.
      </Typography>
    </Box>
  );
};

export default AboutPage;
