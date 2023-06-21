import React from 'react';
import './NavTab.css';

function NavTab() {
    return (
        <ul className="landing-nav">
            <li>
                <a href='#about-project' className="landing-nav__text hover-style">О проекте</a>
            </li>
            <li>
                <a href='#techs' className="landing-nav__text hover-style">Технологии</a>
            </li>
            <li>
                <a href='#about-me' className="landing-nav__text hover-style">Студент</a>
            </li>
        </ul>
    );
}

export default NavTab;