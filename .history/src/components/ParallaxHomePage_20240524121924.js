import React from 'react'
import { Parallax } from 'react-parallax';

const ParallaxHomePage = () => {
        // const { ref } = useParallax({ speed: 10 });
    return (
            <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={require('path/to/another/image.jpg')}
        bgImageAlt="the dog"
        strength={-200}
    >
        Blur transition from min to max
        <div style={{ height: '200px' }} />
    </Parallax>
            <Parallax
                blur={10}
                bgImage={"https://via.placeholder.com/1920x1080"}
                bgImageAlt="the cat"
                strength={200}>
                Content goes here. Parallax height grows with content height.
            </Parallax>
            //   <div className="parallax" data-parallax="scroll" data-image-src="https://via.placeholder.com/1920x1080"></div>
 
  )
}

export default ParallaxHomePage