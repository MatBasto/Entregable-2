import React from 'react';
import { Box, Typography, Grid, Paper, Avatar, Divider, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import './AboutPage.css';

const AboutPage = () => {
  const developers = [
    {
      name: "Mateo Augusto Basto Olaya",
      email: "mat.basto@udla.edu.co",
      avatar: "https://i.pinimg.com/736x/91/6d/01/916d0141ef345c2751e7b9ff53057c5e.jpg",
      role: "Full Stack Developer",
      github: "https://github.com/MatBasto" 
    }
  ];

  const handleCardClick = (githubUrl) => {
    window.open(githubUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Box className="about-container">
      <Typography variant="h4" className="about-title" gutterBottom>
        Acerca del Proyecto
      </Typography>
      
      <Divider sx={{ mb: 4, backgroundColor: '#ff8c00' }} />
      
      <Typography variant="body1" className="about-description" paragraph>
        Esta aplicación web fue desarrollada como parte del curso de Programación Web 
        en la Universidad de la Amazonia para el programa de Ingeniería de Sistemas, 
        utilizando React, Vite, Material UI y la API pública de personajes de Dragon Ball.
      </Typography>
      
      <Typography variant="h5" className="team-title" gutterBottom sx={{ mt: 4, mb: 3 }}>
        Creador de la pagina
      </Typography>
      
      <Grid container spacing={4} justifyContent="center">
        {developers.map((dev, index) => (
          <Grid item xs={12} sm={6} md={5} key={index}>
            <Paper 
              elevation={6} 
              className="dev-card"
              onClick={() => handleCardClick(dev.github)}
            >
              <div className="dragon-ball-circle"></div>
              <Avatar 
                src={dev.avatar} 
                alt={dev.name}
                className="dev-avatar"
              />
              <Typography variant="h6" className="dev-name">
                {dev.name}
              </Typography>
              <Typography variant="body2" className="dev-role">
                {dev.role}
              </Typography>
              <Typography variant="body2" className="dev-email">
                {dev.email}
              </Typography>
              
              <Box className="github-link">
                <GitHubIcon fontSize="small" sx={{ mr: 1 }} />
                <Typography variant="body2">Ver perfil de GitHub</Typography>
              </Box>
              
              <div className="card-border"></div>
            </Paper>
          </Grid>
        ))}
      </Grid>
      
      <Box className="university-info" sx={{ mt: 5 }}>
        <Typography variant="subtitle1">
          Universidad de la Amazonia
        </Typography>
        <Typography variant="subtitle2">
          Ingeniería de Sistemas
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutPage;
