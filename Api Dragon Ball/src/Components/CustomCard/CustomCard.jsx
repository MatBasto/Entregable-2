import React from 'react';
import './CustomCard.css';

const CustomCard = ({ user, isDetail = false }) => {
  return (
    <div className={`card-character ${isDetail ? 'card-detail' : ''}`}>
      <div className="image-container">
        <img src={user.image} alt={user.name} className="card-image" />
      </div>
      <div className="card-content">
        <h3 className="card-name">{user.name}</h3>
        <p className="card-text">
          <strong>Raza:</strong> <span className="highlight">{user.race || 'Desconocida'}</span>
        </p>

        {isDetail && (
          <>
            <p className="card-text">
              <strong>Género:</strong> <span className="highlight">{user.gender || 'No especificado'}</span>
            </p>
            <p className="card-text">
              <strong>Planeta de origen:</strong> <span className="highlight">{user.originPlanet || 'Desconocido'}</span>
            </p>
            <p className="card-text">
              <strong>Ki:</strong> <span className="highlight">{user.ki || 'Desconocido'}</span>
            </p>
            <p className="card-text">
              <strong>Descripción:</strong> <span className="highlight">{user.description || 'No disponible'}</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default CustomCard;