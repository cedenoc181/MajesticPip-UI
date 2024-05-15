import React from 'react'
import "./About.css"
import Image1 from "./images/fx-img-3.jpeg"

function About() {
  return (
    // BS Cards 
    <div id="about" class="container">

{/* trade results */}
        <div class="row">
        <div class="col-5">     
        <figure class="figure">
                <img src={Image1} class="figure-img img-fluid rounded" alt="test 1"/>
                <figcaption class="figure-caption"></figcaption>
        </figure>
        </div>

        {/* <div class="col-8">

        </div> */}

        <figure class="figure">
                <img src="..." class="figure-img img-fluid rounded" alt="test 2"/>
                <figcaption class="figure-caption"></figcaption>
        </figure>
        </div>
{/* BS card for discord link  */}
        <div class="card text-center w-75 m-auto">
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
        </div>

    </div>
  )
}

export default About