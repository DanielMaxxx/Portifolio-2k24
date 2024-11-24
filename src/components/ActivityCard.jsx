import React from 'react';
import './ActivityCard.css';

function ActivityCard({ title, description, imageUrl, link }) {
  return (
    <div className="activity-card">
      <img src={imageUrl} alt={title} className="activity-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Ver mais</a>
    </div>
  );
}

export default ActivityCard;
