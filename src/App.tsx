import Navbar from './components/Navbar';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import CarInsurancePage from './pages/CarInsurancePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/seguros/auto" element={<CarInsurancePage />} />
        </Routes>

        <footer style={{
          padding: '4rem 0',
          background: '#F5F7FA',
          borderTop: '1px solid #E2E8F0'
        }}>
          <div className="container" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span style={{ fontWeight: 700, fontSize: '1.2rem' }}>Olivia & Asociados</span>
            <span style={{ color: '#718096' }}>© 2024 Corredora de Seguros. Todos los derechos reservados.</span>
          </div>
        </footer>

        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
