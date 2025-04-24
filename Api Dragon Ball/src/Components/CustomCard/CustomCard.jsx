import React, { useState, useEffect } from 'react';
import './CustomCard.css';

const CustomCard = ({ user, isDetail = false }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [carouselImages, setCarouselImages] = useState([]);
  const [hasMultipleImages, setHasMultipleImages] = useState(false);

  useEffect(() => {
    if (user) {
      // Preparar imágenes para el carrusel (imagen base + transformaciones)
      const images = [
        { image: user.image, name: user.name },
        ...(user.transformations || [])
      ];
      
      setCarouselImages(images);
      setHasMultipleImages(images.length > 1);
    }
  }, [user]);

  if (!user) return null;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };
  
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className={`card-character ${isDetail ? 'card-detail' : ''}`}>
      {isDetail && hasMultipleImages ? (
        <div className="image-container carousel-container">
          <button className="carousel-btn left" onClick={prevSlide}>◀</button>
          
          <div className="carousel-content">
            <img
              src={carouselImages[currentSlide].image}
              alt={carouselImages[currentSlide].name}
              className="card-image"
            />
            
            <div className="carousel-indicators">
              {carouselImages.map((_, index) => (
                <span
                  key={index}
                  className={`indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                ></span>
              ))}
            </div>
          </div>
          
          <button className="carousel-btn right" onClick={nextSlide}>▶</button>
        </div>
      ) : (
        <div className="image-container">
          <img
            src={String(user.image || 'https://via.placeholder.com/150')}
            alt={String(user.name || 'Personaje')}
            className="card-image"
          />
        </div>
      )}
      
      <div className="card-content">
        {isDetail && hasMultipleImages ? (
          <h3 className="card-name">{carouselImages[currentSlide].name}</h3>
        ) : (
          <h3 className="card-name">{String(user.name || 'Desconocido')}</h3>
        )}
        
        <p className="card-text">
          <strong>Raza:</strong> <span className="highlight">{String(user.race || 'Desconocida')}</span>
        </p>

        {isDetail && (
          <>
            <p className="card-text">
              <strong>Género:</strong> <span className="highlight">{String(user.gender || 'No especificado')}</span>
            </p>
            <p className="card-text">
              <strong>Ki Base:</strong> <span className="highlight">{String(user.ki || 'Desconocido')}</span>
            </p>
            <p className="card-text">
              <strong>Afiliacion:</strong> <span className="highlight">{String(user.affiliation || 'Desconocida')}</span>
            </p>
            <p className="card-text">
              <strong>Estado:</strong> <span className="highlight">{user.isDestroyed ? 'Destruido' : 'Vivo'}</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default CustomCard;
