import React from 'react';
import dani from '../../assets/images/dani.jpg';
// import { Link } from 'react-router-dom';

function About() {
    return (
        <section className="section-header">
            <h2>
                About Me
            </h2>
            <div className="about-flex-container">
                <div className="image-holder">
                    <img src={dani} className="profilepic" alt="profilepic" />
                </div>
                <div className="bio">

                    <p>
                        I enjoy taking complex problems and turning them into visually appealing user-friendly designs.
                        Information is powerful. How it is presented, even more so.
                        When I am not working, you will most likely find me doing some kind of project, puzzle, or spending time with my family.
                    </p>
                </div>

            </div>
        </section>
    );
}

export default About;