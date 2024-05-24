import React from 'react'
import ParallaxHomePage from '../components/ParallaxHomePage'
import '../App.css'

function HomePage() {
  return (
      <ParallaxHomePage >
          {/* Text on top of the image */}
          <div className="card bg-dark">
              <img src="../img/pablo-heimplatz-EAvS-4KnGrk-unsplash.jpg" className="card-img" alt="..."/>
                <h1>Parallax scrolling</h1>
              <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>
            </div>
          </ParallaxHomePage>
  )
}

export default HomePage