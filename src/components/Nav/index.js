import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {


    return (
        <div>
            <header className="flex-row px-1 header">
                <h2 className="logo">
                    <a href="/react-portfolio/">Dani Whitlock</a>
                </h2>

                <nav className="header-nav navbar">
                    <ul className="flex-row nav-list">
                        <li className="mx-2">
                            <Link className="header-link" to="/about">About</Link>
                        </li>
                        <li className="mx-2">
                            <Link className="header-link" to="/portfolio">Portfolio </Link>
                        </li>
                        <li className="mx-2">
                            <Link className="header-link" to="/contact">Contact</Link>
                        </li>
                        <li className="mx-2">
                            <a className="header-link" href="https://drive.google.com/file/d/16tIyVihzH_2PJ5zbfHivb2_yVuslX0Hp/view?usp=sharing" target="_blank">Resume </a>
                        </li>
                    </ul>
                </nav>

            </header>
            <div className="hero"></div>
        </div>

    );
}

export default Nav;

