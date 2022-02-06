import React from 'react';
import Cards from './Cards';

// import { Container } from './styles';#fc6e3d

function Intro() {
    return <div>
        <section id="intro" className="about call-to-action section overly bg-1 intro">
            
            <div className="container-fluid">
                <div className="row justify-content-around">
                    <div className="col-12 d-flex justify-content-center title wow fadeIn" data-wow-duration="1500ms">
                        <h2>Participe Conosco<div className="title-border-1"></div>
                        </h2>
                    </div>
                   <Cards />
                </div>        
            </div>
        </section>
    </div>;
}

export default Intro;