import React from 'react'
import "./Currencybanner.css"
import Currencybannercards from "./Currencybannercards"



function Currencybanner({ currency }) {


console.log(currency);

console.log("success")
  return (
    <div id="currencybanner">
      <h2 className="bannerTitle" ><span className="usd">1 USD$</span> Conversion</h2>
       <div className="currencybanner">
          {currency.map((currencies, index) => (
            <Currencybannercards key={index} currencies={currencies}/>
          ))}
          </div>
    </div>
  )
}

export default React.memo(Currencybanner); 