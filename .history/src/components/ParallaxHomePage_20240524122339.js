import React from 'react'
import { Parallax, Background } from 'react-parallax';

const ParallaxHomePage = () => {
        // const { ref } = useParallax({ speed: 10 });
    return (
        <Parallax strength={300}>
            <Background className="custom-bg">
                <img src="http://www.fillmurray.com/500/320" alt="fill murray" style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    position: 'absolute',
                }} />
            </Background>
        </Parallax>
            //   <div className="parallax" data-parallax="scroll" data-image-src="https://via.placeholder.com/1920x1080"></div>
 
  )
}

export default ParallaxHomePage