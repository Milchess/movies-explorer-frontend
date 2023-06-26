import React, { useCallback } from 'react';
import ExitMenu from '../../images/exitMenu.svg';
import AccountIcon from '../../images/iconProfile.svg';
import { Link, NavLink } from 'react-router-dom';
import '../../index.css';
import './MenuBurger.css';

function MenuBurger(props) {
    return (
        <section className={`menu ${props.isMenuOpen && 'menu_opened'}`}>
            <div className="exit-menu">
                <button className="exit-menu__btn" type="button">
                    <img src={ExitMenu} className="exit-menu__btn-img hover-style" alt="Кнопка закрытия"
                         onClick={props.handlerClickClose}/>
                </button>
                <div className="exit-menu__box">
                    <nav className="main-menu">
                        <ul className="main-menu__elements">
                            <li className="main-menu__element">
                                <Link to="/" className="main-menu__link hover-style">Главная</Link>
                            </li>
                            <li className="main-menu__element">
                                <NavLink to="/movies"
                                         className={useCallback((isActive) => `main-menu__link hover-style ${isActive && 'main-menu__link_active'}`, [])}>Фильмы</NavLink>
                            </li>
                            <li className="main-menu__element">
                                <NavLink to="/saved-movies"
                                         className={useCallback((isActive) => `main-menu__link hover-style ${isActive && 'main-menu__link_active'}`, [])}>Сохранённые
                                    фильмы</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <Link to="/profile" className="main-account hover-style">
                        <span className="main-account__text">Аккаунт</span>
                        <img className="main-account__icon" src={AccountIcon} alt="Значок профиля"/>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default MenuBurger;