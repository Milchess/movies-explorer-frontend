import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';
import './Footer.css';

function Footer(props) {
    return (
        <footer className={`footer ${props.isMain && 'footer_main'}`}>
            <p className={`footer__text ${props.isMain && 'footer__text_main'}`}>Учебный проект Яндекс.Практикум x BeatFilm.</p>
            <div className="footer__author">
                <p className="footer__copyright">&copy; 2023</p>
                <ul className="footer__link">
                    <Link to={{ pathname: 'https://practicum.yandex.ru/' }} target="_blank" className="footer__link-text hover-style">
                        <li>Яндекс.Практикум</li>
                    </Link>
                    <Link to={{ pathname: 'https://github.com/' }} target="_blank"
                          className="footer__link-text hover-style">
                        <li>Github</li>
                    </Link>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;