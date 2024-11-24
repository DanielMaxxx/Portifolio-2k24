import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './pages/Home';
import SubjectPage from './pages/SubjectPage';
import TrimestrePage from './pages/TrimestrePage';
import RecoveryPage from './pages/RecoveryPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/animations.css';
 // Arquivo de animações para transições

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={500}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/subject/:subject" element={<SubjectPage />} />
          <Route path="/subject/:subject/trimestre/:trimestre" element={<TrimestrePage />} />
          <Route path="/subject/:subject/recovery" element={<RecoveryPage />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}

export default App;
