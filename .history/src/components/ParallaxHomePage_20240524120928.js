import React from 'react'
import { useParallax } from 'react-scroll-parallax';

const ParallaxHomePage = () => {
        const { ref } = useParallax({ speed: 10 });
        return (
            <div ref={ref} className="my-thing" data-image-src="https://via.placeholder.com/1920x1080" />
            //   <div className="parallax" data-parallax="scroll" data-image-src="https://via.placeholder.com/1920x1080"></div>
 
  )
}

export default ParallaxHomePage