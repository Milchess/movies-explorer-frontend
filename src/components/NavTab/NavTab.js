import React from 'react';
import './NavTab.css';

function NavTab(props) {
    return (
        <div className='landing-nav'>
            <button onClick={() => props.handlerClick(props.project)}
                    className='landing-nav__text hover-style'>О проекте
            </button>
            <button onClick={() => props.handlerClick(props.technologies)}
                    className='landing-nav__text hover-style'>Технологии
            </button>
            <button onClick={() => props.handlerClick(props.student)}
                    className='landing-nav__text hover-style'>Студент
            </button>
        </div>
    )
}

export default NavTab;