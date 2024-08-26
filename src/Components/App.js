import './App.css';
// import Spline from '@splinetool/react-spline';
import { Routes, Route, useLocation} from "react-router-dom";
import React, {useState, useEffect} from "react"
import Nav from './Nav';
import Home from './Home';
import Currencybanner from './Currencybanner';
import About from './About';
import Mission from './Mission';
import Resources from './Resources';
import Footer from './Footer';
import Privacy from './Privacy';

function App() {
  //currencies to store API
  const [currencies, setCurrencies] = useState([]);

  const Spline = React.lazy(() => import('@splinetool/react-spline'));

   useEffect(() => {
    const fetchData = async () => {
      const url = `${process.env.REACT_APP_API_URL}/scrape`;
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
      <Home path="/home" Spline={Spline}/>
         {/* Render your currencies data here */}
         {currencies && currencies.length > 0 ? (
              <Currencybanner currency={currencies} />
          ) : (
            <div class="loadingQue">Loading currencies...</div> //add icon for loading ?
          )}
      <About path="/about"/>
      <Resources path="/resources"/>
      <Mission path="/mission"/>
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
