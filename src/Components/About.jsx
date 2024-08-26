import React from "react";
import "./About.css";
import PhoneTrading from "./images/signal-icon.png";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function About() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  const form = useRef();

  emailjs.init({
    publicKey: "j8scqiH2-jh8K4TK9",
    // Do not allow headless browsers
    blockHeadless: true,
    blockList: {
      // Block the suspended emails
      list: ["foo@emailjs.com", "bar@emailjs.com"],
      // The variable contains the email address
      watchVariable: "userEmail",
    },
    limitRate: {
      // Set the limit rate for the application
      id: "app",
      // Allow 1 request per 10s
      throttle: 10000,
    },
  });

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("submit clicked");
    // Ensure you have a reference to your form
    const formElement = form.current;

    // Extract the user's email address from the form
    const userEmail = formElement.querySelector('input[name="email"]').value;
    console.log("userEmail: " + userEmail);
    if (!userEmail) {
      console.error("User email is required for auto-reply");
      return;
    }

    // Send the main email
    emailjs
      .sendForm("service_jpfojjx", "template_irl4h16", formElement)
      .then((result) => {
        console.log(result.text, "email sent to admin");
      });
     setName(""); //Reset input after submission
     setEmail(""); //Reset input after submission
     setSubmitted(true); //after submission turn booleann true to send alert
     
     setTimeout(() => {
      setSubmitted(false)
     }, 5000);
  };

  return (
    // BS Cards
    <div id="about" class="container-fluid">
      {/* trade results */}
      <div class="row">
        <div class="hero col-12">
          <img
            src={PhoneTrading}
            class="figure-img img-fluid rounded"
            alt="trading"
          />
          <div class="jumbotron jumbotron-fluid">
            <div class="about-container">
              <h1 class="display-4">
                Join Our Free{" "}
                <span class="display-4-span">Trading Community</span>
              </h1>
              <p class="lead">
                Unlock the Power of Trading Signals with a group of like minded
                individuals.{" "}
              </p>
              <p class="cta">
                Ready to start your path to profits? Join our{" "}
                <span class="discord-server-character">
                  Discord Server Today!
                </span>{" "}
              </p>{" "}
              {/*edit this span class */}
            </div>
          </div>
        </div>
        {  submitted ? <div class="alert alert-success" role="alert">
              Discord link sent to email address submitted!
              </div> :
        <form className="form col-8" ref={form} onSubmit={sendEmail}>
          <div class="form-container">
            <div className="form-group">
              <label className="form-input-label" for="exampleInputName">
                Name
              </label>
              <input
                type="name"
                className="form-control"
                id="exampleInputName"
                value = {name}
                onChange={(e) => setName(e.target.value)} 
                aria-describedby="nameHelp"
                placeholder="Enter your name"
                name="name"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-input-label" for="exampleInputEmail1">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                value = {email}
                onChange={(e) => setEmail(e.target.value)} 
                aria-describedby="emailHelp"
                placeholder="Enter your email address"
                name="email"
                required
              />
              <small id="emailHelp" className="form-text text-muted">
                *We'll never share your email with anyone else.
              </small>
            </div>

            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
                required
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                I agree to the website{" "}
                <span class="policy">
                  <span
                    style={{ display: "inline-block", margin: 0 }}
                    onClick={() => {
                      navigate("/privacy");
                    }}
                  >
                    {" "}
                    privacy policy
                  </span>
                </span>
              </label>
            </div>

            <div className="btn-container">
              <button type="submit" className="submit-btn" value="Send">
                Join!
              </button>
            </div>
          </div> 
  </form> }
      </div>
    </div>
  );
}

export default About;
