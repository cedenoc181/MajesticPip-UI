import React from 'react'

function About() {
  return (
    // BS Cards 
    <div id="about" class="">

        <div>
            
        </div>

{/* trade results */}
        <figure class="figure">
                <img src="..." class="figure-img img-fluid rounded" alt="..."/>
                <figcaption class="figure-caption"></figcaption>
        </figure>


        <figure class="figure">
                <img src="..." class="figure-img img-fluid rounded" alt="..."/>
                <figcaption class="figure-caption"></figcaption>
        </figure>

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

    {/* join news letter */}
    {/* requires $enable-grid-classes Sass variable to be enabled, per bootstrap docs*/}
        <div class="newsletter"> 
            <div class="mt-3">
                <h3 class="label text-center">
                    Join our
                    <small class="text-muted"> Newsletter!</small>
                </h3>
            </div>
                <div class="row g-3 w-75 m-auto">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
                    </div>
                    <div >
                        <div class="mb-3 w-75 m-auto">
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@email.com"></input>
                        </div>

                        <div class="d-grid mx-auto w-25">
                            <button type="button" class="btn btn-secondary btn-lg">
                                    Submit
                            </button>

                        </div>
                    </div>
                </div>
        </div>

    </div>
  )
}

export default About