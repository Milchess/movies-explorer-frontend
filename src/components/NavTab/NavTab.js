import React from 'react';
import './NavTab.css';

function NavTab(props) {
    function ScrollToMain() {
        props.onClick(props.nav);
    }

    return (
        <div className='landing-nav'>
            <button onClick={ScrollToMain}
                    className='landing-nav__text hover-style'>О проекте
            </button>
            <button onClick={ScrollToMain}
                    className='landing-nav__text hover-style'>Технологии
            </button>
            <button onClick={ScrollToMain}
                    className='landing-nav__text hover-style'>Студент
            </button>
        </div>
    )
}

export default NavTab;