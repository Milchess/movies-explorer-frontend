import React from 'react';
import '../../index.css';
import './Techs.css';

function Techs() {
    return (
        <section id='techs' className='section-landing section-landing_grey'>
            <h2 className='section-landing__title'>Технологии</h2>
            <div className='technologies-box'>
                <p className='technologies-box__title'>7 технологий</p>
                <p className='technologies-box__subtitle'>На курсе веб-разработки мы освоили технологии, которые
                    применили в
                    дипломном проекте.</p>
            </div>
            <ul className='technologies-list'>
                <li className='technologies-list__element'>HTML</li>
                <li className='technologies-list__element'>CSS</li>
                <li className='technologies-list__element'>JS</li>
                <li className='technologies-list__element'>React</li>
                <li className='technologies-list__element'>Git</li>
                <li className='technologies-list__element'>Express.js</li>
                <li className='technologies-list__element'>mongoDB</li>
            </ul>
        </section>
    )
}

export default Techs;