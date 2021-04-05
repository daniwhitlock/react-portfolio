import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {


    return (
        <div>
            <header className="flex-row px-1 header">
                <h2 className="logo">
                    <a href="/">Dani Whitlock</a>
                </h2>
                <h2 className="small-screen-logo flex-row px-1">
                    <a href="/">DW</a>
                </h2>
                <nav className="header-nav">
                    <ul className="flex-row nav-list">
                        <li className="mx-2">
                            <Link className="header-link" to="/about">About Me</Link>
                        </li>
                        <li className="mx-2">
                            <Link className="header-link" to="/portfolio">Portfolio </Link>
                        </li>
                        <li className="mx-2">
                            <Link className="header-link" to="/contact">Contact</Link>
                        </li>
                        {/* TO DO PUT IN LINK */}
                        <li className="mx-2">
                            <a className="header-link" href="aputinlinktogoogledocresume">Resume </a>
                        </li>
                    </ul>
                </nav>

            </header>
            <div className="hero"></div>
        </div>

    );
}

export default Nav;

