import React from 'react';
import '../../index.css';
import './Portfolio.css';
import pointer from '../../images/pointer.svg';
import { Link } from 'react-router-dom';

function Portfolio() {
    return (
        <ul className="nav-site">
            <li className="nav-site__element hover-style">
                <Link to={{ pathname: 'https://github.com/Milchess/how-to-learn' }}
                       className='nav-site__element nav-site__element_link' target="_blank">
                    <p className="nav-site__text">Статичный сайт</p>
                    <img className="nav-site__img" src={pointer} alt="Стрелка перехода"/>
                </Link>
            </li>
            <li className="nav-site__element hover-style">
                <Link to={{ pathname: 'https://github.com/Milchess/russian-travel' }}
                      className="nav-site__element nav-site__element_link" target="_blank">
                    <p className="nav-site__text">Адаптивный сайт</p>
                    <img className="nav-site__img" src={pointer} alt="Стрелка перехода"/>
                </Link>
            </li>
            <li className="nav-site__element hover-style">
                <Link to={{ pathname: 'https://github.com/Milchess/react-mesto-api-full' }}
                      className="nav-site__element nav-site__element_link" target="_blank">
                    <p className="nav-site__text">Одностраничное приложение</p>
                    <img className="nav-site__img" src={pointer} alt="Стрелка перехода"/>
                </Link>
            </li>
        </ul>
    );
}

export default Portfolio;