import React from 'react'

function currencybanner({ currency }) {


console.log(currency);

console.log("success")
  return (
    <div id="currencybanner" class="container">
        <h3 id="currency" class="currencyticker">{currency.abbriviation}</h3>
         <p class="currencyfullname"> {currency.name}</p>
    </div>
  )
}

export default currencybanner 