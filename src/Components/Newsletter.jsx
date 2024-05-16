import React from 'react'
import "./Newsletter.css"

function Newsletter() {
  return (
    /* join news letter */
    /* requires $enable-grid-classes Sass variable to be enabled, per bootstrap docs*/
    <div class="newsletter" id="newsletter"> 
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
  )
}

export default Newsletter