import React from 'react';
import headerLogo from '../../images/logoS.svg';
import { Link } from 'react-router-dom';
import '../../index.css';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header(props) {
    return (
        <header className='header'>
            <Link to='/'><img className='logo' src={headerLogo} alt='Логотип сайта'/></Link>
            <Navigation
                onButtonClick={props.onButtonClick}
            />
        </header>
    );
}

export default Header;