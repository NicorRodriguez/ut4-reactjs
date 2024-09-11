import React from 'react';
import './Card.css'; // Aquí puedes añadir los estilos

const Card = ({ children }) => {
  return (
    <div className="card">
      {children}
    </div>
  );
};

export default Card;
