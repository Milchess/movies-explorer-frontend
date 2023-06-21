import React from 'react';
import landingImg from '../../images/landing-logo.svg';
import './Promo.css'

function Promo() {
    return (
        <section className='landing-main'>
            <img className='landing-main__img' src={landingImg} alt='Картинка главной страницы'/>
            <h1 className='landing-main__title'>Учебный проект студента факультета Веб-разработки.</h1>
        </section>
    )
}

export default Promo;