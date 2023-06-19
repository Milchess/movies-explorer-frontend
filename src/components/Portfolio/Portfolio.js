import React from 'react';
import '../../index.css';
import './Portfolio.css';
import pointer from '../../images/pointer.svg';

function Portfolio() {
    return (
        <div className='nav-site'>
            <div className='nav-site__element hover-style'>
                <p className='nav-site__text'>Статичный сайт</p>
                <img className='nav-site__img' src={pointer} alt='Стрелка перехода'/>
            </div>
            <div className='nav-site__element hover-style'>
                <p className='nav-site__text'>Адаптивный сайт</p>
                <img className='nav-site__img' src={pointer} alt='Стрелка перехода'/>
            </div>
            <div className='nav-site__element hover-style'>
                <p className='nav-site__text'>Одностраничное приложение</p>
                <img className='nav-site__img' src={pointer} alt='Стрелка перехода'/>
            </div>
        </div>
    )
}

export default Portfolio;