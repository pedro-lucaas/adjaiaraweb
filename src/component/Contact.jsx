import React from 'react';
import MapContainer from './MapContainer';

// import { Container } from './styles';

function Contact() {
    return <div >
        <section id="contato" className="call-to-action-2 bg-one " >
<div className='wow fadeInUp'>

            {/* section title */}
            <div className="title d-flex justify-content-center" data-wow-duration="1500ms">
                <h2 className='fs-2'>Entre em Contato
                    <div className="title-border-2"></div></h2>
            </div>
            {/* /section title */}
            <MapContainer />
            {/* Contact Details */}
</div>


        </section>
    </div>;
}

export default Contact