import React from 'react';
import IMG_5217 from '../../assets/IMG_5406.jpg';
import Navbar from './Navbar';
import About from './About/About';




function About() {
    return (
        <div>
            <div className="container" id="About">
                <div className="row mb-5">
                    <div className="col-md About-left"></div>
                    <h1>Hello I'm Anna</h1>
                </div>
                <div ClassName="row">
                    <div className="col-md">
                        <h3 className="title" id="AboutTitle">About</h3>
                        <img src={IMG_5217} alt="IMG_5217" className="w-90" />
                        <div className="row align-self-center aboutText">

                        </div>

                        <p> Contact:</p>

                        <div className="row">
                            <a href="https://github.com/AnNavales"></a>
                            <a href="mailto:anna_navales@yahoo.com"></a>

                        </div>
                        <div />

                        <p className="About">

                            I'm from Orlando , Florida. I have Associate Degree in Culinary Arts.
                        </p>

                        <p className="About">

                            I currently joined UCF Full Stack Developer Bootcamp to learn web design.
                        </p>
                        <p ClassName="About">
                            In my downtime I love cooking and hosting dinner for my family and friends.
                        </p>
                        <p ClassName="skills">
                            What I learned in Bootcamp:
                            <ul>
                                <li>HTML, CSS, Javascript, jQuery, bootstrap, and React.js</li>
                                <li> Node.js and Express.js</li>
                                <li> MySQL, MongoDb, Mongoose </li>
                                <li> github and Heroku</li>
                            </ul>
                        </p>

                    </div>
                </div>
            </div>


            )
}

            export default About;
