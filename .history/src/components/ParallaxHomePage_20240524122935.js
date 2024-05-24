import React from 'react'


const ParallaxHomePage = () => {
        const { ref } = useParallax({ speed: 10 });
        return (
            <Parallax translateX={['-100px', '200px']}>
                <div className="my-thing" />
            </Parallax>
            //   <div className="parallax" data-parallax="scroll" data-image-src="https://via.placeholder.com/1920x1080"></div>
 
  )
}

export default ParallaxHomePage