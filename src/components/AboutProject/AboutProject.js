import React from 'react';
import '../../index.css';
import './AboutProject.css';

function AboutProject() {
    return (
        <section id='about-project' className='section-landing'>
            <h2 className='section-landing__title'>О проекте</h2>
            <div className='project-box'>
                <div className='project-box__text'>
                    <h3 className='project-box__title'>Дипломный проект включал 5 этапов</h3>
                    <p className='project-box__subtitle'>Составление плана, работу над бэкендом, вёрстку, добавление
                        функциональности
                        и финальные доработки.</p>
                </div>
                <div className='project-box__text'>
                    <h3 className='project-box__title'>На выполнение диплома ушло 5 недель</h3>
                    <p className='project-box__subtitle'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно
                        было
                        соблюдать,
                        чтобы успешно защититься.</p>
                </div>
            </div>
            <div className='project-time'>
                <div className='project-time__line'>
                    <p className='project-time__line-back'>1 неделя</p>
                    <p className='project-time__line-front'>4 недели</p>
                </div>
                <div className='project-time__line'>
                    <p className='project-time__line-text-back'>Back-end</p>
                    <p className='project-time__line-text-front'>Front-end</p>
                </div>
            </div>
        </section>
    )
}

export default AboutProject;