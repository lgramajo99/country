import './App.css';
import Card from './components/card/Card';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';


function App() {
  return (
    <div className="App">
      <Nav />
      <h1>Henry Countries</h1>
      
      <Card />
      <Card />
      <Card />

      <Footer />
    </div>
  );
}

export default App;
