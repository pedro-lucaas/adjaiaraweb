import React from 'react';
import * as MdIcons from 'react-icons/md'
import * as AiIcons from 'react-icons/ai'
const LogoMain = '/assets/images/adjaiara-logo2.png'

export default function Footer() {
    const today = new Date().getFullYear()
    
    return (
        <footer id="footer" className="bg-one footer call-to-action-2">
            
            <div className="container contact">
                <div className="contact-info wow fadeInUp" data-wow-duration="500ms">
                    <h2 className='fs-2'>Contato <div></div></h2>
                </div>


                <div className="contact-details row">

                    <div className="con-info col-12 col-md-10 col-lg-4">
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
                    <div className="con-info col-12 col-md-10 col-lg-4">
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
                    <div className="con-info col-12 col-md-10 col-lg-4">
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
                        <li><a href="https://www.facebook.com/adjaiara/" target="_blank" rel="noreferrer"><AiIcons.AiFillFacebook className='i img-fluid' /></a></li>
                        <li><a href="https://www.instagram.com/adjaiara/" target="_blank" rel="noreferrer"><AiIcons.AiFillInstagram className='i' /></a></li>
                        <li><a href="https://www.youtube.com/channel/UCb6GR-irIyMpSfsdrhPC7CQ" target="_blank " rel="noreferrer"><AiIcons.AiFillYoutube className='i' /></a></li>
                    </ul>
                </div>
            </div>
            <div className="container">
                <div className="wow fadeInUp" data-wow-duration="500ms">
                    <div className="">

                        {/* copyright */}
                        <div className="copyright text-center">
                            <a href="/">
                                <img src={LogoMain} alt="AD Jaiara" />
                            </a>
                            <span className="logo-title fs-1">AD <b>JAIARA</b></span>
                            <br />
                        
                            <p className='fs-6 '>&copy;{today} . Todos os direitos reservados.
                                <a href="http://www.adjaiara.org"> Assembleia de Deus Vila Jaiara</a>.
                            </p>
                        </div>
                        {/* /copyright */}

                    </div> 
                </div> 
            </div> 
        </footer>
    )
}