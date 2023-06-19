import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';
import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <p className='footer__text'>Учебный проект Яндекс.Практикум x BeatFilm.</p>
            <div className='footer__author'>
                <p className='footer__copyright'>&copy; 2023</p>
                <div className='footer__link'>
                    <Link to={{ pathname: 'https://practicum.yandex.ru/' }} className='footer__link-text hover-style' target='_blank'>Яндекс.Практикум</Link>
                    <Link to={{ pathname: 'https://github.com/' }} className='footer__link-text hover-style' target='_blank'>Github</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;