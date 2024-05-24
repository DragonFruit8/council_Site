import React from 'react'
import '../App.css'

const ParallaxHomePage = () => {
        return (
            // <div className="parallax" data-parallax="scroll" data-image-src="https://via.placeholder.com/1920x1080" />
            <div className="card bg-dark">
              <img src={'src/img/pablo-heimplatz-EAvS-4KnGrk-unsplash.jpg'} className="imgBackground" alt="background Photo"/>
              <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
 
  )
}

export default ParallaxHomePage