import React from 'react'
import { Parallax, Background } from 'react-parallax';

const ParallaxHomePage = () => {
        // const { ref } = useParallax({ speed: 10 });
    return (
        <Parallax
            bgImage="/src/img/pablo-heimplatz-EAvS-4KnGrk-unsplash.jpg"
            renderLayer={percentage => (
                <div
                    style={{
                        position: 'absolute',
                        background: `rgba(255, 125, 0, ${percentage * 1})`,
                        left: '50%',
                        top: '50%',
                        width: percentage * 500,
                        height: percentage * 500,
                        height
                    }}
                />
            )}
        >
            <p>... Content</p>
        </Parallax>
            //   <div className="parallax" data-parallax="scroll" data-image-src="https://via.placeholder.com/1920x1080"></div>
 
  )
}

export default ParallaxHomePage