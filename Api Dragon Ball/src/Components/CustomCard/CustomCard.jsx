import React from 'react';
import './CustomCard.css';

const CustomCard = ({ user, isDetail = false }) => {
  if (!user) return null;

  return (
    <div className={`card-character ${isDetail ? 'card-detail' : ''}`}>
      <div className="image-container">
        <img
          src={String(user.image || 'https://via.placeholder.com/150')}
          alt={String(user.name || 'Personaje')}
          className="card-image"
        />
      </div>
      <div className="card-content">
        <h3 className="card-name">{String(user.name || 'Desconocido')}</h3>
        <p className="card-text">
          <strong>Raza:</strong> <span className="highlight">{String(user.race || 'Desconocida')}</span>
        </p>

        {isDetail && (
          <>
            <p className="card-text">
              <strong>Género:</strong> <span className="highlight">{String(user.gender || 'No especificado')}</span>
            </p>
            <p className="card-text">
              <strong>Planeta de origen:</strong> <span className="highlight">{String(user.originPlanet || 'Desconocido')}</span>
            </p>
            <p className="card-text">
              <strong>Ki:</strong> <span className="highlight">{String(user.ki || 'Desconocido')}</span>
            </p>
            <p className="card-text">
              <strong>Descripción:</strong> <span className="highlight">{typeof user.description === 'object' ? JSON.stringify(user.description) : String(user.description || 'No disponible')}</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default CustomCard;
