import React from 'react';

const AboutPage = () => {

    return (
        <div>
            <div className="container d-flex row my-5">
                <div className="col flex-fill">
                <img src='./src/img/prince-akachi-J1OScm_uHUQ-unsplash.jpg' className="profileImage" alt="background" />
                </div>
                <div className="col pt-5">
                    <h1 className="card-title">About Us</h1>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
                </div>
        </div>
    );

}

export default AboutPage;
