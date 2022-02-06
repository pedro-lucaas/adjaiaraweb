import React from 'react';
import MapContainer from './MapContainer';
import * as MdIcons from 'react-icons/md'
import * as AiIcons from 'react-icons/ai'
// import { Container } from './styles';

function Contact() {
    return <div >
        <section id="contato" className="call-to-action-2 bg-one" >

            {/* section title */}
            <div className="title d-flex justify-content-center wow fadeInUp" data-wow-duration="1500ms">
                <h2>Entre em Contato
                    <div className="title-border-2"></div></h2>
            </div>
            {/* /section title */}
            <MapContainer />
            {/* Contact Details */}


            <div className="container contact">
                <div className="contact-info wow fadeInUp" data-wow-duration="500ms">
                    <h2>Contato <div></div></h2>
                </div>


                <div className="contact-details">

                    <div className="con-info ">
                        <div>

                            <b>
                                <div className='icon'>
                                    <MdIcons.MdPhone />
                                </div>
                                Telefone/WhatsApp:
                            </b>
                            <p>+55 62 3099-1259 / 62 99333-8461</p>
                        </div>
                    </div>

                    <div className="con-info ">
                        <div>

                            <b>
                                <div className='icon'>
                                    <MdIcons.MdLocationOn />
                                </div>
                                Endereço:
                            </b>
                            <p>Av. 24 de Agosto
                                Qd. 24 Lt. 12
                                Vila Jaiara75060-470
                                Anápolis GO</p>
                        </div>
                    </div>

                    <div className="con-info">
                        <div className=''>

                            <b>
                                <div className='icon'>
                                    <MdIcons.MdEmail />
                                </div>
                                E-mail:
                            </b>
                            <p>..................</p>
                        </div>
                    </div>
                </div>
                <div className="social-icon">
                    <ul className="list-inline">
                        <li><a href="https://www.facebook.com/adjaiara/" target="_blank" rel="noreferrer"><AiIcons.AiFillFacebook className='i' /></a></li>
                        <li><a href="https://www.instagram.com/adjaiara/" target="_blank" rel="noreferrer"><AiIcons.AiFillInstagram className='i' /></a></li>
                        <li><a href="https://www.youtube.com/channel/UCb6GR-irIyMpSfsdrhPC7CQ" target="_blank " rel="noreferrer"><AiIcons.AiFillYoutube className='i' /></a></li>
                    </ul>
                </div>
            </div>
        </section>
    </div>;
}

export default Contact