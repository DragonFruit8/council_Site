import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax';

function ParallaxHomePage() {
    const Component = () => {
        const { ref } = useParallax({ speed: 10 });
        return <div ref={ref} className="my-thing" />;
      };
  return (
        //   <div className="parallax" data-parallax="scroll" data-image-src="https://via.placeholder.com/1920x1080"></div>
 
  )
}

export default ParallaxHomePage