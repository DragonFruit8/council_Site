import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax';

function ParallaxHomePage() {
  return (
      <ParallaxProvider>
        <div>
          <div className="parallax" data-parallax="scroll" data-image-src="path/to/image.jpg"></div>
          <div className="parallax" data-parallax="scroll" data-image-src="path/to/image.jpg"></div>
          <div className="parallax" data-parallax="scroll" data-image-src="path/to/image.jpg"></div>
        </div>
      </ParallaxProvider>
  )
}

export default ParallaxHomePage