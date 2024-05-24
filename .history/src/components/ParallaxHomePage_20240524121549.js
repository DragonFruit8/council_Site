import React from 'react'
import { Parallax } from 'react-parallax';

const ParallaxHomePage = () => {
        // const { ref } = useParallax({ speed: 10 });
        return (
            <Parallax blur={10} bgImage="/public/" bgImageAlt="the cat" strength={200}>
                Content goes here. Parallax height grows with content height.
            </Parallax>
            //   <div className="parallax" data-parallax="scroll" data-image-src="https://via.placeholder.com/1920x1080"></div>
 
  )
}

export default ParallaxHomePage