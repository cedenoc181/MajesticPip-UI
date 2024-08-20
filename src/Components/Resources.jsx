import React, { useEffect } from 'react'
import "./Resources.css"
import buynsell from "./images/buynsell.png"
import news from "./images/news-icon.png"
import strategy from "./images/strategy-icon.png"
import chat from "./images/chat-icon.png"
import think from "./images/think-icon.png"
import AOS from 'aos'



function Resources() {

  useEffect(() => {
    AOS.refresh(); // Reinitialize AOS to account for new content
  }, []);

let imageArr = [
  {
  "pic": buynsell, 
  "picDesc": "Get instant buy and sell signals delivered in our chat, keeping you informed of the best market opportunities. These alerts help you make confident trading decisions, ensuring you never miss a key moment in the market.",
  "alt": "buy-sell"
  },
  {
 "pic": news, 
  "picDesc": "Our Currency Market News Hub provides real-time updates and expert analysis on global events impacting currency prices, helping you stay informed and make smarter trading decisions. Access the latest news, economic reports, and market reactions all in one place, tailored for our community members.",
  "alt": "makret-news"
},
  {
    "pic": strategy, 
  "picDesc": "Engage in dynamic discussions about trading strategies, where members share insights, ideas, and approaches to navigating the currency markets. By collaborating with fellow traders, you can refine your techniques, explore new strategies, and enhance your overall trading performance.",
  "alt": "trading-strategy"
},
  {
    "pic": think, 
  "picDesc": "Inexperienced members can access a range of educational resources and learning opportunities to help them build a solid foundation in currency trading.",
  "alt": "educational-resource"
},
  {
    "pic": chat, 
  "picDesc": "Our discord chat is a valuable resource where you can connect with other traders, exchange ideas, and build relationships, making our community a powerful network for growth and collaboration.",
  "alt": "community-chat"
}
];
  return (
  
    <div className="resources" id="resources"> 
    <h2 className="resource-title" data-aos="zoom-in" data-aos-duration="1200">Resources</h2>
<div className="imageMap row">
{imageArr.map ( img => (
      <div className="imageCon column">
      <img className="imageCard" src={img.pic} alt={img.alt}/>
      <p className="imageDesc">{img.picDesc}</p>
    </div>
))}
</div>
</div>
  )
}

export default Resources