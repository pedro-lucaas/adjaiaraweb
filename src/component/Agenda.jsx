import React from 'react';
import CarouselAgenda from './CarouselAgenda';
const background = '/assets/images/backgrounds/bg-3.jpg'

function Agenda() {
    return (<div>
        <section id="agenda" className="section-sm shadow-lg  " style={{ backgroundImage: `url(${background})` }} >
            <div className="row wow fadeInUp">
                {/* section title */}
                <div className="title d-flex justify-content-center">
                    <h2 className="text-white fs-2">Cronograma Semanal<div className="title-border-2"></div></h2>
                </div>
                {/* /section title */}
                <div className="d-flex call-to-action-2 justify-content-center wow fadeInUp" >
                    <div className="container col-12 text-center">
                        <CarouselAgenda />
                    </div>
                </div>
            </div>
        </section>
    </div >
    )

}

export default Agenda;

