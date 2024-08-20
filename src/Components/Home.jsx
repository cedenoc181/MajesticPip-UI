import React, {Suspense} from 'react'


// I passed down the Spline import from APP.js to improve the 
// performance of the application.
function Home({Spline}) {
  return (
    // Spline animation import 
    <div id="home">
      {/* <img src={} alt=""/> */}
      {/*new code testing out performance*/ }
      <Suspense fallback={<div>Loading 3D animation...</div>}>
  <Spline rel="preload" scene="https://prod.spline.design/AGX4YCccdi9F5row/scene.splinecode" /> 
      </Suspense >
   </div>
  )
}

export default React.memo(Home);



