import React from 'react'
import '../App.css'
import Annouce

const ParallaxHomePage = () => {
        return (
            // <div className="parallax" data-parallax="scroll" data-image-src="https://via.placeholder.com/1920x1080" />
            <div className="card bg-dark">
              <img src='src/img/pablo-heimplatz-EAvS-4KnGrk-unsplash.jpg' className="imgBackground" alt="background"/>
                <div className="card-img-overlay">
                    <div className="container my-5">
                        <Annouce>

                        </Annouce>
                      <h1 className="card-title">Card title</h1>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
              </div>
            </div>
 
  )
}

export default ParallaxHomePage