import React from 'react'
import "./Mission.css"
import long_gold from "./images/big-long-gold-fx.jpg"

function Mission() {
  return (
    <div id="mission" class="mission">

    <h2 class="missionTitle">Why us <span class="whyPurple">?</span></h2>

 
    <div class="trade-images">
      <img class="long_gold" src={long_gold} alt={"long gold chart"}/>
    </div>


    </div>
  )
}

export default Mission