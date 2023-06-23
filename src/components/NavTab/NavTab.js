import React from 'react';
import './NavTab.css';
import { HashLink } from 'react-router-hash-link';

function NavTab() {
    return (
        <nav>
            <ul className="landing-nav">
                <li>
                    <HashLink  to="#about-project" relative="id" className="landing-nav__text hover-style">О проекте</HashLink>
                </li>
                <li>
                    <HashLink to="#techs" className="landing-nav__text hover-style">Технологии</HashLink>
                </li>
                <li>
                    <HashLink to="#about-me" className="landing-nav__text hover-style">Студент</HashLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavTab;