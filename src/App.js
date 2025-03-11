import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ShoppingPage from './pages/ShoppingPage';
import PaginationComponent from './components/Pagination';
import Duvidas from './pages/duvidas';
import SustentabilidadePage from './pages/SustentabilidadePage';
import NossaHistoriaPage from './pages/NossaHistoriaPage';
import FranquadoPage from './pages/FranquadoPage';
import EspacoClientepage from './pages/EspacoClientePage';
import CalculoMMC_Dicas from './pages/CalculoMMC_Dica';
import Assistant from './assistant/assistant';
import PlanDetailsPage from './pages/PlanDetailsPage'; 
import './App.css';

/**
 * Componente principal do aplicativo.
 * Roteia as páginas usando o React Router e renderiza o layout da aplicação, incluindo a navegação e o conteúdo das páginas.
 * @component
 * @returns {JSX.Element} A estrutura completa do aplicativo com navegação e rotas.
 */
function App() {
  return (
    <Router>
      {/* Componente de Navegação */}
      <NavbarComponent />

      {/* Definindo as rotas e os componentes para cada caminho */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/duvidas" element={<Duvidas />} />
        <Route path="/SustentabilidadePage" element={<SustentabilidadePage />} />
        <Route path="/NossaHistoriaPage" element={<NossaHistoriaPage />} />
        <Route path="/FranquadoPage" element={<FranquadoPage />} />
        <Route path="/EspacoClientepage" element={<EspacoClientepage />} />
        <Route path="/CalculoMMCDicas" element={<CalculoMMC_Dicas />} />
        <Route path="/shopping" element={<ShoppingPage />} />
        <Route path="/plan-details" element={<PlanDetailsPage />} /> {/* Nova rota adicionada */}
      </Routes>

      {/* Componente de paginação (exibido em todas as páginas) */}
      <Assistant />
      <PaginationComponent />
    </Router>
  );
}

export default App;
