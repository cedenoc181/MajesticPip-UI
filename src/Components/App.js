import './App.css';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Testimonies from './Testimonies';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Nav/>
      </header>
      <Home id="home"/>
      <About id="about"/>
      <Testimonies id="testimonial"/>

    </div>
  );
}

export default App;
