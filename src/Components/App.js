import './App.css';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Testimonies from './Testimonies';
import Newsletter from './Newsletter';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header ">
          <Nav/>
      </header>
      <Home />
      <About />
      <Testimonies />
      <Newsletter />
      <Footer />

    </div>
  );
}

export default App;
