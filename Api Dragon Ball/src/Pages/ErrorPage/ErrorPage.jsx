import React, { useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './ErrorPage.css';

const dragonBall1 = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c3d85213-145b-4862-919b-0c5a5dc0ddb6/d92t5g9-c78ae7be-ab05-46c1-9122-1a366f13bdcf.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MzZDg1MjEzLTE0NWItNDg2Mi05MTliLTBjNWE1ZGMwZGRiNlwvZDkydDVnOS1jNzhhZTdiZS1hYjA1LTQ2YzEtOTEyMi0xYTM2NmYxM2JkY2YucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.bq7HHdW-rq3D5-r4UBmb5L1d-86EFqwlpSEVkxtorcw"; 
const dragonBall2 = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c3d85213-145b-4862-919b-0c5a5dc0ddb6/d92t5v8-89f313fc-b39d-4fbb-83db-2e189c5e69a5.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MzZDg1MjEzLTE0NWItNDg2Mi05MTliLTBjNWE1ZGMwZGRiNlwvZDkydDV2OC04OWYzMTNmYy1iMzlkLTRmYmItODNkYi0yZTE4OWM1ZTY5YTUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.nTFpresSQIdE0YFNQZb8hzHYwK6yc6MYwllZmv_XTLc"; 
const dragonBall3 = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c3d85213-145b-4862-919b-0c5a5dc0ddb6/d92t63m-37390bf0-a66c-436d-bb20-212975975d32.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MzZDg1MjEzLTE0NWItNDg2Mi05MTliLTBjNWE1ZGMwZGRiNlwvZDkydDYzbS0zNzM5MGJmMC1hNjZjLTQzNmQtYmIyMC0yMTI5NzU5NzVkMzIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yviq2nlWlapIkj9H7qmCt9KU2MlDN_0Sjdh7Ww_rbRw"; 
const dragonBall4 = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c3d85213-145b-4862-919b-0c5a5dc0ddb6/d92t6dt-c015dfaf-8225-44b4-9a39-28f758670032.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MzZDg1MjEzLTE0NWItNDg2Mi05MTliLTBjNWE1ZGMwZGRiNlwvZDkydDZkdC1jMDE1ZGZhZi04MjI1LTQ0YjQtOWEzOS0yOGY3NTg2NzAwMzIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0AZoqDyZl9dYIvTciddrYQo7FJ8LbohMG0BDD_vwfOw"; 
const dragonBall5 = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c3d85213-145b-4862-919b-0c5a5dc0ddb6/d92t6q4-ea43dd50-97cf-4c6a-bdf8-057cdef3ba09.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MzZDg1MjEzLTE0NWItNDg2Mi05MTliLTBjNWE1ZGMwZGRiNlwvZDkydDZxNC1lYTQzZGQ1MC05N2NmLTRjNmEtYmRmOC0wNTdjZGVmM2JhMDkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0Ia5sXsq9855jaZFkbtK1mBtoVlKNAQXK_pvcQiFNo4"; 
const dragonBall6 = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c3d85213-145b-4862-919b-0c5a5dc0ddb6/d92t6vp-b55ee53d-5036-4262-9a32-d1f0ae41f5b4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MzZDg1MjEzLTE0NWItNDg2Mi05MTliLTBjNWE1ZGMwZGRiNlwvZDkydDZ2cC1iNTVlZTUzZC01MDM2LTQyNjItOWEzMi1kMWYwYWU0MWY1YjQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Y2KSdrIduenKMh__ULtE93Rq3Y17VYW7T7LylM4jfd8"; 
const dragonBall7 = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c3d85213-145b-4862-919b-0c5a5dc0ddb6/d92t70l-cca08865-2611-4d19-a48b-1ee58709c015.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MzZDg1MjEzLTE0NWItNDg2Mi05MTliLTBjNWE1ZGMwZGRiNlwvZDkydDcwbC1jY2EwODg2NS0yNjExLTRkMTktYTQ4Yi0xZWU1ODcwOWMwMTUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.O-DRvWySP3nCOOcykBjSB8SI02huY3T1auADccdpoXw"; 

const dragonBalls = [dragonBall1, dragonBall2, dragonBall3, dragonBall4, dragonBall5, dragonBall6, dragonBall7];

const ErrorPage = () => {
  useEffect(() => {
    // Ocultar todos los elementos de la página
    document.body.style.overflow = 'hidden';
    
    // Opcional: Esconder el header, navbar y footer si están fuera del router
    const header = document.querySelector('header');
    const navbar = document.querySelector('nav');
    const footer = document.querySelector('footer');
    
    if (header) header.style.display = 'none';
    if (navbar) navbar.style.display = 'none';
    if (footer) footer.style.display = 'none';
    
    return () => {
      // Restaurar todo al desmontar
      document.body.style.overflow = 'auto';
      
      if (header) header.style.display = '';
      if (navbar) navbar.style.display = '';
      if (footer) footer.style.display = '';
    };
  }, []);

  return (
    <Box className="error-container">
      <Box className="dragon-balls-container">
        {[1, 2, 3, 4, 5, 6, 7].map((star) => (
          <div key={star} className={`dragon-ball star-${star}`}>
            <div className="stars">
              <img 
                src={dragonBalls[star-1]} 
                alt={`Dragon Ball ${star}`} 
                className="dragon-ball-image" 
              />
            </div>
          </div>
        ))}
      </Box>
      
      <Box className="error-content">
        <Typography variant="h2" className="error-title">
          ¡Error 404!
        </Typography>
        
        <Typography variant="h4" className="error-subtitle">
          ¡Las esferas del dragón no pueden encontrar esta página!
        </Typography>
        
        <Box className="goku-error">
          <img 
            src='https://img1.picmix.com/output/stamp/normal/5/3/6/6/2166635_c644b.png'
            alt="Goku Enojado" 
            className="goku-image" 
          />
        </Box>
        
        <Typography variant="body1" className="error-message">
          Parece que la página que buscas ha sido destruida en un combate o está en otra dimensión.
        </Typography>
        
        <Button 
          component={Link} 
          to="/" 
          variant="contained" 
          className="home-button"
        >
          Volver al inicio
        </Button>
      </Box>
    </Box>
  );
};

export default ErrorPage;