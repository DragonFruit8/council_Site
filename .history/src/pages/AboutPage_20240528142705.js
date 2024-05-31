import React from 'react';

const AboutPage = () => {

    return (
        <div>
            <div className="container d-flex row my-5">
                <div className="col" id='profileImage'>

                    <img src='/src/img/' className="profileImage" alt="background" />
                </div>
                <div className="col pt-5">
                    <h1 className="card-title">About Us</h1>
                    <p className="card-text">I moved to Ypsilanti in 2014 for a job and I stayed because of the people and the possibilities of this place. As a person who moved around a lot as a kid, I feel lucky to have found such a vibrant home to grow roots.</p>
                    <p className="card-text">Et qui irure aute nostrud ea adipisicing officia adipisicing non veniam cupidatat do. Voluptate do commodo sint minim excepteur. Cupidatat culpa Lorem elit proident enim consectetur ipsum minim do ea ea consectetur dolor. </p>
                    <p className="card-text">Ex consectetur nulla proident Lorem proident sit ea officia est culpa consectetur. Anim laborum sint sint elit proident deserunt ex eu eiusmod veniam amet aliquip sunt. Irure amet eu cillum esse commodo in.</p>
                    <p className="card-text">Ullamco non non mollit culpa et deserunt ipsum pariatur proident enim amet mollit.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
                </div>
        </div>
    );

}

export default AboutPage;
