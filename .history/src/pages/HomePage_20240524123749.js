import React from 'react'
import ParallaxHomePage from '../components/ParallaxHomePage'
import '../App.css'

function HomePage() {
  return (
      <ParallaxHomePage >
          {/* Text on top of the image */}
          <div className="card bg-dark">
              <img src="https://via.placeholder.com/1920x1080" className="card-img" alt="..."/>
                <h1>Parallax scrolling</h1>
              <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>
            </div>
          </ParallaxHomePage>
  )
}

export default HomePage