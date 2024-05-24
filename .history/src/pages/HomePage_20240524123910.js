import React from 'react'
import ParallaxHomePage from '../components/ParallaxHomePage'
import '../App.css'

function HomePage() {
  return (
      <ParallaxHomePage >
          {/* Text on top of the image */}
          <div className="card bg-dark">
              <img src={"/src/img/pablo-heimplatz-EAvS-4KnGrk-unsplash.jpg"} className="card-img" alt="..."/>
              <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </ParallaxHomePage>
  )
}

export default HomePage