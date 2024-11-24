import React from 'react';
import { useParams } from 'react-router-dom';
import './RecoveryPage.css';

function RecoveryPage() {
  const { subject } = useParams();

  return (
    <div className="recovery-page">
      <h2>Recuperação - {subject}</h2>
      <p>Adicione aqui as atividades de recuperação.</p>
    </div>
  );
}

export default RecoveryPage;
