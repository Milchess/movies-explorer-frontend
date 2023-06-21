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
        <main>
            <Promo/>
            <NavTab
                handlerClick={handleScrollToMain}
                project={project}
                technologies={technologies}
                student={student}
            />

            <AboutProject
                innerRef={project}
            />
            <Techs
                innerRef={technologies}
            />
            <AboutMe
                innerRef={student}
            />
        </main>
    );
}

export default Main;