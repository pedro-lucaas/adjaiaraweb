import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const LogoMain = '/assets/images/adjaiara-logo2.png'


// import { Container } from './styles';

function NavigationBar() {
    return <>

        <nav id="navigation" className=" navbar-expand-lg navbar-dark bg-dark navigation shadow section-xs" >
            <div className="container">
                <div className="row justify-content-around px-3">

                    <Link href="/">
                        <a className="navbar-header logo-title col-9 col-sm-5 col-md-4">
                            <div>
                                <img src={LogoMain} className="img" alt="LogoADJaiara" width="40" height="40" className="d-inline-block align-top" />AD <b>JAIARA</b>
                            </div>
                        </a>
                    </Link>

                    <button className="navbar-toggler col align-self-center" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse col-2" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a className="nav-link" href="/home#intro">Home</a></li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Culto Online</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li>
                                        <Link href="/home/live">
                                       <a className="dropdown-item">Ao Vivo</a> 
                                    </Link>

                                    </li>
                                    <li><a className="dropdown-item" target={'_blank'} rel="noreferrer" href="https://www.youtube.com/channel/UCb6GR-irIyMpSfsdrhPC7CQ">Transmissões Anteriores</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link href="/home/igreja">
                                    <a className="nav-link" > A igreja</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/home#agenda">Agenda</a></li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/home/ministerios">
                                    <a className="nav-link" >Ministérios</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/home/oracao">
                                    <a className="nav-link" >Oração</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/home#ofertas">
                                    Ofertas
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/home#contato">
                                    Contato
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </nav>

    </>;
}

export default NavigationBar;