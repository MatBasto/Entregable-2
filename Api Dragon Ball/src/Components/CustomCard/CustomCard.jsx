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
              <strong>Ki:</strong> <span className="highlight">{String(user.ki || 'Desconocido')}</span>
            </p>
            <p className="card-text">
              <strong>Especie:</strong> <span className="highlight">{String(user.affiliation || 'Desconocida')}</span>
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
