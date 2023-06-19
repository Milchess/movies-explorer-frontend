import React from 'react';
import ExitMenu from '../../images/exitMenu.svg';
import AccountIcon from '../../images/iconProfile.svg';
import { Link } from 'react-router-dom';
import '../../index.css';
import './MenuBurger.css';

function MenuBurger(props) {
    return (
        <div className={`menu ${props.isMenuOpen ? 'menu_opened' : ''}`}>
            <div className="exit-menu">
                <button className="exit-menu__btn" type="button">
                    <img src={ExitMenu} className="exit-menu__btn-img" alt="Кнопка закрытия"
                         onClick={props.handlerClickClose}/>
                </button>
                <div className="exit-menu__box">
                    <nav className="main-menu">
                        <ul className="main-menu__elements">
                            <li className="main-menu__element">
                                <Link to="/" className="main-menu__link hover-style">Главная</Link>
                            </li>
                            <li className="main-menu__element">
                                <Link to="/movies" className="main-menu__link hover-style">Фильмы</Link>
                            </li>
                            <li className="main-menu__element">
                                <Link to="/saved-movies" className="main-menu__link hover-style">Сохранённые
                                    фильмы</Link>
                            </li>
                        </ul>
                    </nav>
                    <Link to="/profile" className="main-account">
                        <h3 className="main-account__text">Аккаунт</h3>
                        <img className="main-account__icon" src={AccountIcon} alt="Значок профиля"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MenuBurger;