import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const LogoMain = '/assets/images/adjaiara-logo2.png'


// import { Container } from './styles';

function NavigationBar() {
    return <>

        <nav id="navigation" className="navbar navbar-expand-lg navbar-dark bg-dark navigation shadow" style={{height:'80px'}}>


                <div className='position-absolute end-0'>

                    <button className="navbar-toggler m-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className='position-absolute start-0'>
                    <Link href="/">
                        <a className="navbar-header logo-title px-5 px-xl-3">
                            <img src={LogoMain} className="img-fluid" alt="LogoADJaiara" width="50" height="50"/>
                            <span className='d-none d-xl-inline'>AD <b>JAIARA</b></span>
                        </a>
                    </Link>
                </div>
            <div className="collapse navbar-collapse justify-content-center bg-dark" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item text-center">
                        <a className="nav-link toggle" href="/home#intro">HOME</a>
                    </li>
                    <li className="nav-item text-center dropdown">
                        <a className="nav-link" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">CULTO ONLINE</a>
                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdownMenuLink">
                            <li>
                                <Link href="/home/live">
                                    <a className="dropdown-item text-center">AO VIVO</a>
                                </Link>

                            </li>
                            <li><a className="dropdown-item text-center" target={'_blank'} rel="noreferrer" href="https://www.youtube.com/channel/UCb6GR-irIyMpSfsdrhPC7CQ">TRANSMISSOES ANTERIORES</a></li>
                        </ul>
                    </li>
                    <li className="nav-item text-center">
                        <Link href="/home/igreja">
                            <a className="nav-link">A IGREJA</a>
                        </Link>
                    </li>
                    <li className="nav-item text-center">
                        <a className="nav-link" href="/home#agenda">AGENDA</a>
                    </li>
                    <li className="nav-item text-center">
                        <Link href="/home/ministerios">
                            <a className="nav-link" >MINISTERIOS</a>
                        </Link>
                    </li>
                    <li className="nav-item text-center">
                        <Link href="/home/oracao">
                            <a className="nav-link" >ORACAO</a>
                        </Link>
                    </li>
                    <li className="nav-item text-center">
                        <a className="nav-link" href="/home#ofertas">
                            OFERTAS
                        </a>
                    </li>
                    <li className="nav-item text-center">
                        <a className="nav-link" href="/home#contato">
                            CONTATO
                        </a>
                    </li>

                </ul>
            </div>
        </nav>

    </>;
}

export default NavigationBar;