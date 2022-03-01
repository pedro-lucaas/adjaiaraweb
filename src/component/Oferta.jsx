import React from 'react';
const background = '/assets/images/backgrounds/bg-1.jpg'
const caixa = '/assets/images/bancos/1caixa.png'
const bb = '/assets/images/bancos/1bb.png'
const pix = '/assets/images/bancos/1pix.png'
// import { Container } from './styles';

function Oferta() {
    return <div>
        <section id="ofertas" className="call-to-action bg-two overly">
            <div className="container-fluid d-flex flex-column align-items-center">
                <div className="row justify-content-center d-flex ">
                    <div className="title wow fadeInUp justify-content-center d-flex" data-wow-duration="1500ms">
                        <h2 className='fs-2'>Dízimos e Ofertas <div className="title-border-1"></div></h2>
                    </div>

                    <div className="col-xs-12 col-sm-10 col-md-8 col-lg-6 col-xxl-4 text-center wow wow fadeInUp">
                        <p className='fs-4'>Permaneça fiel nos dízimos e ofertas!
                            Eles podem ser feitos por PIX, transferência ou depósito:</p>
                        <h2 className='pt-3 fs-4'> CNPJ:</h2><p className='fs-4'>02.341.030/0001-97</p>
                    </div>
                </div>
                <div className="row d-flex justify-content-around pt-5 col-lg-10 col-xxl-8">
                    <div className="col-6 col-sm-6 col-md-4 order-0 order-md-0 wow fadeInUp text-center"
                        data-wow-duration="500ms" data-wow-delay="400ms">
                        <div className="post">
                            <div className="figure justify-content-center">
                                <img src={caixa} alt="CAIXA" className="img-fluid p-4 col-6" />
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-4 order-2 order-md-0 wow fadeInUp text-center"
                        data-wow-duration="500ms" data-wow-delay="400ms">
                        <div className="post">
                            <div className="figure justify-content-center">
                                <img src={bb} alt="BANCO DO BRASIL" className="img-fluid p-4 col-6" />
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-4 order-4 order-md-0 wow fadeInUp  text-center"
                        data-wow-duration="500ms" data-wow-delay="400ms">
                        <div className="post">
                            <div className="figure justify-content-center">
                                <img src={pix} alt="PIX" className="img-fluid p-4 col-6" />
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-4 order-1 order-md-0 wow fadeInUp d-flex d-md-inline" data-wow-duration="500ms"
                        data-wow-delay="400ms">
                        <div className="text-center justify-content-center align-self-center">
                            <p className='fs-5'><b>C/C</b> 537-2<b> Cód</b> 003 Ag.3257c</p>
                            
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-4 order-3 order-md-0 wow fadeInUp d-flex d-md-inline" data-wow-duration="500ms"
                        data-wow-delay="400ms">
                        <div className="text-center justify-content-center align-self-center ">
                            <p className='fs-5'><b>C/C</b> 7695-3<b> Ag. </b>3206-9</p>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-4 order-5 order-md-0 wow fadeInUp d-flex d-md-inline" data-wow-duration="500ms"
                        data-wow-delay="400ms">
                        <div className="text-center justify-content-center align-self-center ">
                            <p className='fs-5'>
                                <b>Chave:</b> Celular
                                62 99333-8461

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>;
}

export default Oferta;