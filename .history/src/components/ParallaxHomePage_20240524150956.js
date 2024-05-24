import React from 'react'
import '../App.css'
import Announce from './Announce'

const ParallaxHomePage = () => {
    return (
        // <div className="parallax" data-parallax="scroll" data-image-src="https://via.placeholder.com/1920x1080" />
        <div  id='heroBackground' className="card bg-dark rounded-0 border-0 z-index-0">
            <img src='src/img/pablo-heimplatz-EAvS-4KnGrk-unsplash.jpg' className="imgBackground" alt="background" />
            <div id='zIndex' className="card-img-overlay">
                <div className="container my-5">
                    <div className="pt-5">
                        <Announce />
                        <div>
                            <h1 className="card-title text-white">Welcome</h1>
                            <p className="card-text text-white">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text text-white"><small className="text-muted text-light">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ParallaxHomePage