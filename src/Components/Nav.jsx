import React from 'react'

function Nav() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <div class="navbar-brand" >Mysticpips</div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav m-auto">
        <a class="nav-link active" aria-current="page" href="#home">Home</a>
        <a class="nav-link" href="#about">About us</a>
        <a class="nav-link" href="#testimonial">Testimonies</a>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav

