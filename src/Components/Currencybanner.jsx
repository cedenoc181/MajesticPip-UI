import React from 'react'
import "./Currencybanner.css"
import Currencybannercards from "./Currencybannercards"

function currencybanner({ currency }) {


console.log(currency);

console.log("success")
  return (
    <div id="currencybanner">
      <h2 class="bannerTitle"><span class="usd">1 USD$</span> Conversion</h2>
       <div class="currencybanner">
          {currency.map((currencies, index) => (
            <Currencybannercards key={index} currencies={currencies}/>
          ))}
          </div>
    </div>
  )
}

export default currencybanner 