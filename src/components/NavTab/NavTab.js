import React from 'react';
import './NavTab.css';

function NavTab(props) {
    return (
        <ul className="landing-nav">
            <li>
                <button onClick={() => props.handlerClick(props.project)}
                        className="landing-nav__text hover-style">О проекте
                </button>
            </li>
            <li>
                <button onClick={() => props.handlerClick(props.technologies)}
                        className="landing-nav__text hover-style">Технологии
                </button>
            </li>
            <li>
                <button onClick={() => props.handlerClick(props.student)}
                        className="landing-nav__text hover-style">Студент
                </button>
            </li>
        </ul>
    );
}

export default NavTab;