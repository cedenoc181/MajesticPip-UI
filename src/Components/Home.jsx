import React from 'react'


// I passed down the Spline import from APP.js to improve the 
// performance of the application.
function Home({Spline}) {
  return (
    // Spline animation import 
    <div id="home">
      {/* <img src={} alt=""/> */}
      {/*new code testing out performance*/ }
  <Spline scene="https://prod.spline.design/AGX4YCccdi9F5row/scene.splinecode" /> 
   </div>
  )
}

export default React.memo(Home);



