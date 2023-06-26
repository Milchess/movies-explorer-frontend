import React from 'react';
import './Preloader.css';
import '../../index.css';

function Preloader () {
    return (
        <section className="preloader" id="preloader">
            <div className="preloader-container">
                <div className="preloader-container__spinner"></div>
            </div>
        </section>
    )
}

export default Preloader;