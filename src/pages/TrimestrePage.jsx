import React from 'react';
import { useParams } from 'react-router-dom';
import './TrimestrePage.css';
import ActivityCard from '../components/ActivityCard';

function TrimestrePage() {
  const { subject, trimestre } = useParams();
  const activities = [
    {
      title: 'Atividade 1',
      description: 'Descrição da atividade.',
      imageUrl: 'url-da-imagem.jpg',
      link: '#'
    }
  ];

  return (
    <div className="trimestre-page">
      <h2>{subject} - Trimestre {trimestre}</h2>
      <div className="activities">
        {activities.map((activity, index) => (
          <ActivityCard key={index} {...activity} />
        ))}
      </div>
    </div>
  );
}

export default TrimestrePage;
