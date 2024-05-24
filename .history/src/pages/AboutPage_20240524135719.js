import React from 'react';

const AboutPage = () => {

    return (
        <div>
            <div className="container d-flex row my-5">
                <div className="col" id='profileImage'>

                    <img src='/src/img/prince-akachi-J1OScm_uHUQ-unsplash.jpg' className="profileImage" alt="background" />
                </div>
                <div className="col pt-5">
                    <h1 className="card-title">About Us</h1>
                    <p className="card-text">I moved to Ypsilanti in 2014 for a job and I stayed because of the people and the possibilities of this place. As a person who moved around a lot as a kid, I feel lucky to have found such a vibrant home to grow roots.</p>
                    <p className="card-text">I am a software developer and I am passionate about creating software that is easy to use and that makes people's lives better. I am excited to be a part of the Ypsi community and to help make it a better place for everyone.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
                </div>
        </div>
    );

}

export default AboutPage;
