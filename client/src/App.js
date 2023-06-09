import './App.css';
import Admin from './components/admin/Admin';
import Countrydetail from './components/countrydetail/Countrydetail';
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
        <Route path={'/detail/:idPais'} element={<Countrydetail />} />
        <Route path={'/administracion'} element={<Admin />} />
        <Route path={'*'} element={<Errorpage />} />
      </Routes>
      {(location.pathname === '/') ? null : <Footer />}
    </div>
  );
}

export default App;
