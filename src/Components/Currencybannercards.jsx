import React from 'react'

function Currencybannercards({currencies}) {

console.log(currencies, "data received")



  return (
    <div>
        <>
         <p class="currencyfullname"><span class="cname">{currencies.name}</span></p>
         <h3 id="currency" class="currencyticker">{currencies.abbreviation}</h3>
         </>
    </div>
  )
}

export default Currencybannercards