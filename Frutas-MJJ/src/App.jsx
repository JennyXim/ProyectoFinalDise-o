import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Menu from './pages/Menu';
import Contactos from './pages/Contactos';
import Nosotros from './pages/Nosotros';
import Ingresar from './pages/Ingresar';
import Registrar from './pages/Registrar';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contactos" element={<Contactos />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/ingresar" element={<Ingresar />} />
        <Route path="/registrar" element={<Registrar />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;