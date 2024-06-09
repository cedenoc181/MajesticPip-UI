import './App.css';
import { Routes, Route, useLocation} from "react-router-dom";
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Testimonies from './Testimonies';
import Newsletter from './Newsletter';
import Footer from './Footer';
import Privacy from './Privacy'

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <header className="App-header ">
          <Nav/>
      </header>
      {location.pathname !== "/privacy" && (
        <>
      <Home path="/home"/>
      <About />
      <Testimonies />
      <Newsletter />
      </>
      )}
      <Routes>
        <Route  path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
