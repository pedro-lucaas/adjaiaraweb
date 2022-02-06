import React from 'react';
const background = '/assets/images/backgrounds/bg-1.jpg'
const caixa = '/assets/images/bancos/1caixa.png'
const bb = '/assets/images/bancos/1bb.png'
const pix = '/assets/images/bancos/1pix.png'
// import { Container } from './styles';

function Oferta() {
    return <div>
        <section id="ofertas" className="call-to-action bg-two overly">
            <div className="container-fluid ">
                <div className="row justify-content-center d-flex ">
                    <div className="title wow fadeInUp justify-content-center d-flex " data-wow-duration="1500ms">
                        <h2>Dízimos e Ofertas <div className="title-border-1"></div></h2>
                    </div>

                    <div className="col-xs-12 text-center wow wow fadeInUp w-50">
                        <p>Permaneça fiel nos dízimos e ofertas!
                            Eles podem ser feitos por PIX, transferência ou depósito:</p>
                        <h2> CNPJ:<h3>02.341.030/0001-97</h3></h2>
                    </div>
                </div>
                <div className="row d-flex justify-content-around">
                    <div className="col-6 col-sm-6 col-md-4 order-0 order-md-0 wow fadeInUp text-center"
                        data-wow-duration="500ms" data-wow-delay="400ms">
                        <div className="post">
                            <div className="figure p-1">
                                <img src={caixa} alt="CAIXA" className="img-fluid h-50 w-50" />
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-4 order-2 order-md-0 wow fadeInUp text-center"
                        data-wow-duration="500ms" data-wow-delay="400ms">
                        <div className="post">
                            <div className="figure p-1">
                                <img src={bb} alt="BANCO DO BRASIL" className="img-fluid h-50 w-50" />
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-4 order-4 order-md-0 wow fadeInUp  text-center"
                        data-wow-duration="500ms" data-wow-delay="400ms">
                        <div className="post">
                            <div className="figure p-3">
                                <img src={pix} alt="PIX" className="img-fluid h-50 w-50" />
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-4 order-1 order-md-0 wow fadeInUp" data-wow-duration="500ms"
                        data-wow-delay="400ms">
                        <div className="text-center p-4">
                            <p>

                                <h2>C/C</h2> 537-2
                                <h2>Cód</h2> 003
                                Ag.3257c
                            </p>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-4 order-3 order-md-0 wow fadeInUp" data-wow-duration="500ms"
                        data-wow-delay="400ms">
                        <div className="text-center p-4">
                            <p>
                                <h2>C/C</h2> 7695-3<h2>Ag. </h2>3206-9
                            </p>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-4 order-5 order-md-0 wow fadeInUp" data-wow-duration="500ms"
                        data-wow-delay="400ms">
                        <div className="text-center p-4">
                            <p>
                                <h2>Chave:</h2> Celular
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