import './App.css';
import Errorpage from './components/errorpage/Errorpage';
import Footer from './components/footer/Footer.jsx';
import Inicio from './components/inicio/Inicio.jsx';
import Nav from './components/nav/Nav.jsx';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes >
        
        <Route path={'/inicio'} element={<Inicio />} />
        <Route path={'*'} element={<Errorpage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
