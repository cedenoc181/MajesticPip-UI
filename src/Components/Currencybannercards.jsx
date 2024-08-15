import React from 'react'

function Currencybannercards({currencies}) {

console.log(currencies, "data received")

console.log(currencies.conversions)

  return (
    <div class="container">
      <table class="cards">
          <tr className="name-cards">
            <td class="currencyfullname"><span class="cname">{currencies.name}</span></td>
          </tr>
            <tr class="ticker-cards">
              <td> <h3 class="currencyticker">{currencies.abbreviation}: </h3></td>
              <td><h4 class="currencyConversion"> {currencies.conversions}</h4></td>
            </tr>
          {/* <tr class="conversion-cards">
            <td><h4 class="currencyConversion">{currencies.conversions}</h4></td>
          </tr> */}
          
      </table>


         {/* <p class="currencyfullname"><span class="cname">{currencies.name}</span></p>
         <h3 id="currency" class="currencyticker">{currencies.abbreviation}</h3> */}
    </div>
  )
}

export default Currencybannercards