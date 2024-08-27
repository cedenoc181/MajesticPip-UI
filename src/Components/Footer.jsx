import React from "react";
import igIcon from "./images/IG-icon.png";
import discord from "./images/discord-icon.png";
import telegram from "./images/neon-telegram-icon.png";
import "./Footer.css";

function Footer() {
  return (
    <div id="footerCon" className="footerCon">
      <div className="footer row">
        <h6 className="socialHeader">Connect with us</h6>

        <a
          className="ig-link column"
          href="https://www.instagram.com/majesticprodigy?igsh=MTJnZmdmYnVxOWpzdQ=="
        >
          <img className="instagram column" src={igIcon} alt="IGhandle" />
        </a>

        <a className="chat-link-footer column" href="#about">
          <img className="discord-icon" src={discord} alt="discord-icon" />
        </a>
      </div>
      <div className="copyright">
        &copy; 2024<span className="purple"> MajesticPips</span> All rights
        reserved.
      </div>
    </div>
  );
}

export default Footer;
