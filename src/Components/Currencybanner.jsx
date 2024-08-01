import React from 'react'

function currencybanner({ currency }) {


console.log(currency);

console.log("success")
  return (
    <div id="currencybanner" class="container">
        <h3 id="currency" class="currency ticker">{currency.code}</h3>
         <p class="currency full name"> {currency.name}</p>
    </div>
  )
}

export default currencybanner 