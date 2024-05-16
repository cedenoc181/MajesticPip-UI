import React from 'react'
import "./About.css"
import Image1 from "./images/trading-signal.png"

function About() {
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

  <form class="form col-8">
  <div class="form-group">
    <label for="exampleInputName">Name</label>
    <input type="name" class="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter your name" />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email address" />
    <small id="emailHelp" class="form-text text-muted">*We'll never share your email with anyone else.</small>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">I agree to the website <span class="policy"><a class="policy-link" href="#">privacy policy</a></span></label>
  </div>
  <div class="btn-container">
  <button type="submit" class="btn  btn-primary">Join!</button>
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