import './App.css';
import { Routes, Route, useLocation} from "react-router-dom";
import {useState, useEffect} from "react"
import Nav from './Nav';
import Home from './Home';
import Currencybanner from './Currencybanner';
import About from './About';
import Mission from './Mission';
import Newsletter from './Newsletter';
import Footer from './Footer';
import Privacy from './Privacy';

function App() {
  //currencies to store API
  const [currencies, setCurrencies] = useState([]);

   useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:3001/scrape-data';
      const options = {
        method: 'GET'
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        // console.log(result); // passing fetch data onto the state "currencies" property
        setCurrencies(result); //settinng state to the API object
        console.log("API currencies fetch response")
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


  
  const location = useLocation();
  return (
    <div className="App">
      <header className="App-header ">
          <Nav/>
      </header>
      {location.pathname !== "/privacy" && (
        <>
      <Home path="/home"/>
         {/* Render your currencies data here */}
         {currencies && currencies.length > 0 ? (
              <Currencybanner currency={currencies} />
          ) : (
            <p class="loadingQue">Loading currencies...</p> //add icon for loading ?
          )}
      <About />
      <Mission />
      <Newsletter />
      </>
      )}
      <Routes>
        <Route  path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
