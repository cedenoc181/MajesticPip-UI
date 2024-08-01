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
import Privacy from './Privacy'

function App() {
  //currencies to store API and majorCurrency to be selected currencies from API
  const [currencies, setCurrencies] = useState([]);
  // let [majorCurrency, setMajorCurrency] = useState([]);
  // fetching currency names 
  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://crypto-market-prices.p.rapidapi.com/currencies';
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': 'db2699a3dfmshf2b69166bf418f3p1c5d9cjsn44a1af8bd268',
          'x-rapidapi-host': 'crypto-market-prices.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setCurrencies(result.data.currencies); // results contains currencies but must be accessed through .currencies
        console.log(currencies);
        currencyLoop(result.data.currencies);
        console.log("API currencies fetch response")
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

const desiredCurrencyCodes = new Set(["AUD", "USD", "EUR", "GBP", "JPY", "CAD", "CHF", "NZD", "CNY", "HKD"]);
let container = [];


  const currencyLoop = (currencies) => {
    console.log("currency loop function execution");
    for (let i = 0; i < currencies.length; i++) {
      // console.log(currencies[i].code); // currency code iteration displayed check
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
      {/* {currencies.map(currency => (
      <Currencybanner key={currency.id} currency={currency}/>))} */}
        <Currencybanner />
      <About />
      <Testimonies />
      <Newsletter />
      <Routes>
        <Route  path="/privacy" element={<Privacy />} />
      </Routes>
      </>
      )}
      <Footer />
    </div>
  );
}

export default App;
