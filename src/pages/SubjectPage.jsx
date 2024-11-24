import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './SubjectPage.css';

function SubjectPage() {
  const { subject } = useParams();

  return (
    <div className="subject-page">
      <h2>{subject}</h2>
      <div className="trimestres">
        {[1, 2, 3].map(trimestre => (
          <Link
            to={`/subject/${subject}/trimestre/${trimestre}`}
            className="trimestre-link"
            key={trimestre}
          >
            Trimestre {trimestre}
          </Link>
        ))}
        {(subject === 'Natureza' || subject === 'Linguagens') && (
          <Link to={`/subject/${subject}/recovery`} className="trimestre-link">
            Recuperação
          </Link>
        )}
      </div>
    </div>
  );
}

export default SubjectPage;
