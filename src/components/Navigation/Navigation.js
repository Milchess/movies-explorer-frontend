import React from 'react';
import '../../index.css';
import './Navigation.css';
import { Link } from 'react-router-dom';
import AccountIcon from '../../images/iconProfile.svg';
import BurgerMenu from '../../images/burgerMenu.svg';

function Navigation(props) {
    return (
        <nav className='nav'>
            <nav className='nav__profile'>
                <Link to='/movies' className='nav__text hover-style'>Фильмы</Link>
                <Link to='/saved-movies' className='nav__text hover-style'>Сохранённые фильмы</Link>
            </nav>
            <Link to='/profile' className='account hover-style'>
                <h3 className='account__text'>Аккаунт</h3>
                <img className='account__icon' src={AccountIcon} alt='Значок профиля'/>
            </Link>
            <button className='burger-menu hover-style' type='button' onClick={props.onButtonClick}>
                <img className='burger-menu__img' src={BurgerMenu} alt='Меню бургера'/>
            </button>
        </nav>
    )
}

export default Navigation;