import React, {useEffect} from 'react'
import "./Currencybanner.css"
import Currencybannercards from "./Currencybannercards"
import AOS from 'aos'


function Currencybanner({ currency }) {

  useEffect(() => {
    AOS.refresh(); // Reinitialize AOS to account for new content
  }, []);

console.log(currency);

console.log("success")
  return (
    <div id="currencybanner">
      <h2 className="bannerTitle" data-aos="zoom-in-up" data-aos-duration="1000"><span className="usd">1 USD$</span> Conversion</h2>
       <div className="currencybanner">
          {currency.map((currencies, index) => (
            <Currencybannercards key={index} currencies={currencies}/>
          ))}
          </div>
    </div>
  )
}

export default React.memo(Currencybanner); 