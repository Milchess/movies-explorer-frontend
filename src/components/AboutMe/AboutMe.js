import React from 'react';
import '../../index.css';
import './AboutMe.css';
import { Link } from 'react-router-dom';
import photoStudent from '../../images/photoStudent.png';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
    return (
        <section id='about-me' className='section-landing'>
            <h2 className='section-landing__title'>Студент</h2>
            <div className='portfolio'>
                <div className='portfolio-about'>
                    <h2 className='portfolio-about__name'>Ксения</h2>
                    <p className='portfolio-about__inform'>Фронтенд-разработчик, 30 лет</p>
                    <p className='portfolio-about__inform-text'>Живу в Челябинске, закончила юриспруденцию ЧелГУ.
                        Замужем,
                        детей нет.
                        Люблю играть в компьютерные игры и читать книги. С 2014 года работала в ВУЗе. Год назад
                        захотела
                        писать
                        код и ушла с предыдущей работы. С тех пор изучаю разработку сайтов, совершенствую код который пишу.
                    </p>
                    <Link to={{ pathname: 'https://github.com/Milchess' }} className='link-github hover-style' target='_blank'>Github</Link>
                </div>
                <img src={photoStudent} className='portfolio__photo' alt='Фото студента'/>
            </div>
            <Link to={{ pathname: 'https://github.com/Milchess?tab=repositories' }} className='portfolio-link hover-style' target='_blank'>Портфолио</Link>
            <Portfolio/>
        </section>
    )
}

export default AboutMe;