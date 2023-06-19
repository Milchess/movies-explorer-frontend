import React, { useRef } from 'react';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';


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
        <div className='page'>
            <Promo/>
            <NavTab
                onClick={() => handleScrollToMain(project)}
                onClick={() => handleScrollToMain(technologies)}
                onClick={() => handleScrollToMain(student)}
            />
            <AboutProject
                ref={project}
            />
            <Techs
                ref={technologies}
            />
            <AboutMe
                ref={student}
            />
        </div>
    );
}

export default Main;