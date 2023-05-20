import './App.css';
import Errorpage from './components/errorpage/Errorpage';
import Footer from './components/footer/Footer.jsx';
import Inicio from './components/inicio/Inicio.jsx';
import Landing from './components/landing/Landing';
import Nav from './components/nav/Nav.jsx';
import { Route, Routes, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      
      {(location.pathname === '/') ? null : <Nav />}
      <Routes >
        <Route path='/' element={<Landing />} />
        <Route path={'/inicio'} element={<Inicio />} />
        <Route path={'*'} element={<Errorpage />} />
      </Routes>
      {(location.pathname === '/') ? null : <Footer />}
    </div>
  );
}

export default App;
