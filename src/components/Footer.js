import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__text">Учебный проект Яндекс.Практикум x BeatFilm.</p>
            <div className="footer__author">
                <p className="footer__copyright">&copy; 2023</p>
                <div className="footer__link">
                    <Link href="#" className="footer__link-text hover-style">Яндекс.Практикум</Link>
                    <Link href="#" className="footer__link-text hover-style">Github</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;