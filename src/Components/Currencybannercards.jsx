import React from "react";

function Currencybannercards({ currencies }) {
  console.log(currencies, "data received");

  console.log(currencies.conversions);

  return (
    <div className="container">
      <table className="cards">
        <tr className="name-cards">
          <td className="currencyfullname">
            <span class="cname">{currencies.name}</span>
          </td>
        </tr>
        <tr className="ticker-cards">
          <td>
            {" "}
            <h3 className="currencyticker">{currencies.abbreviation}: </h3>
          </td>
          <td>
            <h4 className="currencyConversion"> {currencies.conversions}</h4>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Currencybannercards;
