import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import landingImg from '../images/landing-logo.svg';
import photoStudent from '../images/photoStudent.png';
import pointer from '../images/pointer.svg';


function Main() {
    const project = useRef(null);
    const technologies = useRef(null);
    const student = useRef(null);

    function handleScrollToMain(e) {
        e.current.scrollIntoView({
            behavior: 'smooth'
        });
    }

    return (
        <div className="page">
            <div className="landing-main">
                <img className="landing-img" src={landingImg} alt="Картинка главной страницы"/>
                <h1 className="landing-title">Учебный проект студента факультета Веб-разработки.</h1>
            </div>
            <div className="landing-nav">
                <button onClick={() => handleScrollToMain(project)} className="landing-nav__text hover-style">О
                    проекте
                </button>
                <button onClick={() => handleScrollToMain(technologies)}
                        className="landing-nav__text hover-style">Технологии
                </button>
                <button onClick={() => handleScrollToMain(student)} className="landing-nav__text hover-style">Студент
                </button>
            </div>
            <div ref={project} className="section-landing">
                <h2 className="title">О проекте</h2>
                <div className="project-box">
                    <div className="project-box__text">
                        <p className="project-box__title">Дипломный проект включал 5 этапов</p>
                        <p className="project-box__subtitle">Составление плана, работу над бэкендом, вёрстку, добавление
                            функциональности
                            и финальные доработки.</p>
                    </div>
                    <div className="project-box__text">
                        <p className="project-box__title">На выполнение диплома ушло 5 недель</p>
                        <p className="project-box__subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно
                            было
                            соблюдать,
                            чтобы успешно защититься.</p>
                    </div>
                </div>
                <div className="project-time">
                    <div className="project-time__line">
                        <p className="project-time__line-back">1 неделя</p>
                        <p className="project-time__line-front">4 недели</p>
                    </div>
                    <div className="project-time__line">
                        <p className="project-time__line-text-back">Back-end</p>
                        <p className="project-time__line-text-front">Front-end</p>
                    </div>
                </div>
            </div>
            <div ref={technologies} className="section-landing section-landing_grey">
                <h2 className="title">Технологии</h2>
                <div className="technologies-box">
                    <p className="technologies-box__title">7 технологий</p>
                    <p className="technologies-box__subtitle">На курсе веб-разработки мы освоили технологии, которые
                        применили в
                        дипломном проекте.</p>
                </div>
                <ul className="technologies-list">
                    <li className="technologies-list__element">HTML</li>
                    <li className="technologies-list__element">CSS</li>
                    <li className="technologies-list__element">JS</li>
                    <li className="technologies-list__element">React</li>
                    <li className="technologies-list__element">Git</li>
                    <li className="technologies-list__element">Express.js</li>
                    <li className="technologies-list__element">mongoDB</li>
                </ul>
            </div>
            <div ref={student} className="section-landing">
                <h2 className="title">Студент</h2>
                <div className="portfolio">
                    <div className="portfolio-about">
                        <p className="portfolio-about__name">Ксения</p>
                        <p className="portfolio-about__inform">Фронтенд-разработчик, 30 лет</p>
                        <p className="portfolio-about__inform-text">Живу в Челябинске, закончила юриспруденцию ЧелГУ.
                            Замужем,
                            детей нет.
                            Люблю играть в компьютерные игры и читать книги. С 2014 года работала в ВУЗе. Год назад
                            захотела
                            писать
                            код и ушла с предыдущей работы.</p>
                        <Link href="#" className="link-github hover-style" target="_blank">Github</Link>
                    </div>
                    <img src={photoStudent} className="portfolio__photo" alt="Фото студента"/>
                </div>
                <Link href="#" className="portfolio-link hover-style" target="_blank">Портфолио</Link>
                <div className="nav-site">
                    <div className="nav-site__element hover-style">
                        <p className="nav-site__text">Статичный сайт</p>
                        <img className="nav-site__img" src={pointer} alt="Стрелка перехода"/>
                    </div>
                    <div className="nav-site__element hover-style">
                        <p className="nav-site__text">Адаптивный сайт</p>
                        <img className="nav-site__img" src={pointer} alt="Стрелка перехода"/>
                    </div>
                    <div className="nav-site__element hover-style">
                        <p className="nav-site__text">Одностраничное приложение</p>
                        <img className="nav-site__img" src={pointer} alt="Стрелка перехода"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;