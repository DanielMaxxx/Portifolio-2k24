import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';


function Home() {
  const subjects = [
    'Matemática', 'Humanas', 'Natureza', 'Linguagens',
    'Banco de Dados', 'Programação de Aplicativos',
    'Teste de Sistemas', 'Desenvolvimento de Sistemas',
    'Modelagem de Sistemas', 'Implementação de Sistemas'
  ];

  return (
    <div className="home">
      <div className="hero">
        <img src="\dmax.JPG" alt="Minha Foto" className="profile-pic" />
        <h1>Bem-vindo ao meu Portfólio!</h1>
        <p>Explore minhas atividades e projetos.</p>
      </div>
      <div className="subjects">
        {subjects.map(subject => (
          <Link to={`/subject/${subject}`} className="subject-link" key={subject}>
            {subject}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
