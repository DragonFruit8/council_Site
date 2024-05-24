import React from 'react'
import { Parallax, Background } from 'react-parallax';

const ParallaxHomePage = () => {
        // const { ref } = useParallax({ speed: 10 });
    return (
        <Parallax
            className="h-100 w-100 d-flex justify-content-center align-items-center"
            blur={{ min: -15, max: 15 }}
            bgImage={'img/pablo-heimplatz-EAvS-4KnGrk-unsplash.jpg'}
            style={{ height: '500px' }}
        bgImageAlt="the dog"
        strength={-200}
    >
        Blur transition from min to max
        <div style={{ height: '500px' }} />
    </Parallax>
            //   <div className="parallax" data-parallax="scroll" data-image-src="https://via.placeholder.com/1920x1080"></div>
 
  )
}

export default ParallaxHomePage