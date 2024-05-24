import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax';

function ParallaxHomePage() {
  return (
      const Component = () => {
          const { ref } = useParallax({ speed: 10 });
          return <div ref={ref} className="my-thing" />;
      };
              <div className="parallax" data-parallax="scroll" data-image-src="https://via.placeholder.com/1920x1080"></div>
          {/* <div className="parallax" data-parallax="scroll" data-image-src="path/to/image.jpg"></div> */}
          {/* <div className="parallax" data-parallax="scroll" data-image-src="path/to/image.jpg"></div> */}
        </div>
      </ParallaxProvider>
  )
}

export default ParallaxHomePage