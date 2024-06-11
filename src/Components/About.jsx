import React from 'react'
import "./About.css"
import Image1 from "./images/trading-signal.png"
import { useNavigate } from "react-router-dom";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function About() {

        const navigate = useNavigate();

        const form = useRef();

        emailjs.init({
                publicKey: 'j8scqiH2-jh8K4TK9',
                // Do not allow headless browsers
                blockHeadless: true,
                blockList: {
                  // Block the suspended emails
                  list: ['foo@emailjs.com', 'bar@emailjs.com'],
                  // The variable contains the email address
                  watchVariable: 'userEmail',
                },
                limitRate: {
                  // Set the limit rate for the application
                  id: 'app',
                  // Allow 1 request per 10s
                  throttle: 10000,
                },
              });

        const sendEmail = (e) => {
                e.preventDefault();
                console.log("submit clicked")
                 // Ensure you have a reference to your form
        const formElement = form.current;

        // Extract the user's email address from the form
        const userEmail = formElement.querySelector('input[name="email"]').value;
        console.log("userEmail: " + userEmail)
        if (!userEmail) {
            console.error("User email is required for auto-reply");
            return;
        }

    // Send the main email
    emailjs.sendForm('service_jpfojjx', 'template_irl4h16', formElement)
        .then((result) => {
            console.log(result.text, "email sent to admin");
        });
};

  return (
    // BS Cards 
    <div id="about" class="container-fluid">

{/* trade results */}
        <div class="row">
        <div class="hero col-12">     
                <img src={Image1} class="figure-img img-fluid rounded" alt="test 1"/>
                <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Join Our Free Trading Community</h1>
    <p class="lead">Unlock the Power of Trading Signals with a group of like minded individuals. </p>
     <p>Ready to start your path to profits? Join our Discord server now!</p>
  </div>
</div>
  </div>

  <form  class="form col-8" ref={form} onSubmit={sendEmail} >
        <div class="form-container">
  <div class="form-group">
    <label class="form-input-label" for="exampleInputName">Name</label>
    <input type="name" class="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter your name" name="name"/>
  </div>
  <div class="form-group">
    <label class="form-input-label" for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email address" name="email"/>
    <small id="emailHelp" class="form-text text-muted">*We'll never share your email with anyone else.</small>
  </div>
  <div class="form-check">
    <label class="form-check-label" for="exampleCheck1">I agree to the website <span class="policy"><p style={{display: 'inline-block'}} onClick={()=> {
        navigate("/privacy");
      }}>privacy policy</p></span></label>
       <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
  </div>
  <div class="btn-container">
  <button type="submit" class="submit-btn" value="Send">Join!</button>
  </div>
  </div>
</form>
{/* BS card for discord link  */}
        {/* <div class="card text-center w-75 m-auto">
                <div class="card-header">
                        Join our Discord!
                </div>
                <div class="card-body">
                        <h5 class="card-title">Mysticpips discord server</h5>
                        <p class="card-text"> Join the best forex discord server and make money with me!</p>
                        <a href="#" class="btn btn-primary">Discord</a>
                </div>
                <div class="card-footer text-muted">
                        Free!
                </div>
         </div> */}

        </div>
    </div>
  )
}

export default About