import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax';

function ParallaxHomePage() {
  return (
      <ParallaxProvider bgImage="./public/pablo-heimplatz-EAvS-4KnGrk-unsplash.jpg" speed={-10}>
      <div style={{ height: 500 }}>
        <h1>Hello, welcome to my blog!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Nullam nec purus eget dolor tincidunt vestibulum. 
          Sed vel felis id mi lacinia ultricies. 
          Integer nec nulla sem. 
          Nam in velit nec nisi dictum ultricies
        </p>
      </div>
    </Parallax>
  )
}

export default ParallaxHomePage