import React from 'react'
import "./Testimonial.css"
import long_gold from "./images/big-long-gold-fx.jpg"

function Testimonies() {
  return (
    <div id="testimonial" class="testimonial">

    <h2 class="testTitle">Why us <span class="whyPurple">?</span></h2>
      <body class="bodyTest">
 
    <div class="trade-images">
      <img class="long_gold" src={long_gold} alt={"long gold chart"}/>
    </div>

    </body>
    </div>
  )
}

export default Testimonies