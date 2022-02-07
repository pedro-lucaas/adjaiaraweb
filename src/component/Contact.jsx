import React from 'react';
import MapContainer from './MapContainer';

// import { Container } from './styles';

function Contact() {
    return <div >
        <section id="contato" className="call-to-action-2 bg-one" >

            {/* section title */}
            <div className="title d-flex justify-content-center wow fadeInUp" data-wow-duration="1500ms">
                <h2 className='fs-1'>Entre em Contato
                    <div className="title-border-2"></div></h2>
            </div>
            {/* /section title */}
            <MapContainer />
            {/* Contact Details */}


        </section>
    </div>;
}

export default Contact