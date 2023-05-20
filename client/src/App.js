import './App.css';
import Cardlist from './components/cardlist/Cardlist';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';


function App() {
  return (
    <div className="App">
      <Nav />
      <h1>Henry Countries</h1>

      <Cardlist />
      <Footer />
    </div>
  );
}

export default App;
