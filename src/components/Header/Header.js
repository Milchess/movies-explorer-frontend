import React from 'react';
import headerLogo from '../../images/logoS.svg';
import { Link } from 'react-router-dom';
import '../../index.css';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import NavigationNotAuthorized from '../NavigationNotAuthorized';

function Header(props) {
    return (
        <header className='header'>
            <Link to='/'><img className='logo hover-style' src={headerLogo} alt='Логотип сайта'/></Link>
{/*            props.loggedIn
            ? <NavigationNotAuthorized />
            : <Navigation onButtonClick={props.onButtonClick}/>*/}
            <Navigation onButtonClick={props.onButtonClick}/>
        </header>
    );
}

export default Header;