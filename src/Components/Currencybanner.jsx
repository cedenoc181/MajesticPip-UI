import React from 'react'
import "./Currencybanner.css"
import Currencybannercards from "./Currencybannercards"

function currencybanner({ currency }) {


console.log(currency);

console.log("success")
  return (
    <div id="currencybanner">
          {currency.map((currencies, index) => (
            <Currencybannercards key={index} currencies={currencies}/>
          ))}
    </div>
  )
}

export default currencybanner 