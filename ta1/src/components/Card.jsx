import React from 'react';
import './Card.css'; // Aquí puedes añadir los estilos

const Card = ({ title, description, person, startDate, endDate }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <p><strong>Persona asignada:</strong> {person}</p>
      <p><strong>Fecha de inicio:</strong> {startDate}</p>
      <p><strong>Fecha de fin:</strong> {endDate}</p>
    </div>
  );
};

export default Card;
