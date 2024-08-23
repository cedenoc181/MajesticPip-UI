import React, { useEffect } from "react";
import "./Mission.css";
import AOS from "aos";

function Mission() {
  useEffect(() => {
    AOS.init(); // Reinitialize AOS to account for new content
  }, []);

  return (
    <div id="mission" className="mission">
      <div className="statement-container">
        <h2 className="missionTitle" data-aos="zoom-in" data-aos-duration="1500">
          Our <span className="purple">Mission</span>
        </h2>
        <p className="statement">
          At MajesticPips, our mission is to empower traders by building a
          vibrant and supportive currency trading community. We believe in the
          power of collective knowledge and collaboration. By joining our
          community, you'll connect with like-minded individuals in our
          interactive Discord chat, where you can share insights, discuss
          trading strategies, and refine your approach to the markets.
        </p>
        <h3 className="missionTitle2" data-aos="zoom-in" >
          <span className="purple"> Why</span> us?
        </h3>
        <p className="statement2">
          We are committed to helping you navigate the complexities of currency
          trading with confidence. Our members gain access to real-time trading
          signals and alerts, ensuring you're always informed and ready to act
          on the latest opportunities.
        </p>

        <h4 className="missionTitle3" data-aos="zoom-in" >
          {" "}
          Our <span className="purple">Ultimate</span> Goal!
        </h4>
        <div className="statement3">
          Together, we'll grow as traders, learning from each other's successes
          and challenges, and ultimately achieving our financial goals.
        </div>
      </div>
    </div>
  );
}

export default Mission;
