import './App.css';
import { Routes, Route, useLocation} from "react-router-dom";
import {useState, useEffect} from "react"
import Nav from './Nav';
import Home from './Home';
import Currencybanner from './Currencybanner';
import About from './About';
import Testimonies from './Testimonies';
import Newsletter from './Newsletter';
import Footer from './Footer';
import Privacy from './Privacy';

function App() {
  //currencies to store API
  const [currencies, setCurrencies] = useState([]);
  //muted until the next time I work on it to save the fetch request hard limit.******************************************
  // fetching currency names 
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const url = 'https://crypto-market-prices.p.rapidapi.com/currencies';
  //     const options = {
  //       method: 'GET',
  //       headers: {
  //         'x-rapidapi-key': 'db2699a3dfmshf2b69166bf418f3p1c5d9cjsn44a1af8bd268',
  //         'x-rapidapi-host': 'crypto-market-prices.p.rapidapi.com'
  //       }
  //     };

  //     try {
  //       const response = await fetch(url, options);
  //       const result = await response.json();
  //       setCurrencies(result.data.currencies); // passing fetch data onto the state "currencies" property
  //       currencyLoop(result.data.currencies);
  //       console.log("API currencies fetch response")
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);


   useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:3001/scrape-data';
      const options = {
        method: 'GET'
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setCurrencies(result); // passing fetch data onto the state "currencies" property
        currencyLoop(result);
        console.log("API currencies fetch response")
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  console.log(currencies)

const desiredCurrencyCodes = new Set(["AUD", "USD", "EUR", "GBP", "JPY", "CAD", "CHF", "CNY"]); //currency codes that i want to abstract
let container = []; //to store unique currencies


  const currencyLoop = (currencies) => {
    console.log("currency loop function execution");
    for (let i = 0; i < currencies.length; i++) {
      // console.log(currencies[i].code); //(keep suedo bc too many lines on console)
      if (desiredCurrencyCodes.has(currencies[i].code)) { 
       container.push(currencies[i])
      }
    }
    console.log(container);
    console.log("last currency update")
  };
  
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
      {container.map(currency => (
      <Currencybanner key={currency.id} currency={currency}/>))}
        {/* <Currencybanner /> */}
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
