import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';


const LogoMain = '/assets/images/adjaiara-logo2.png'


// import { Container } from './styles';

function NavigationBar() {
    const router = useRouter()
    function smoothScroolToId(e) {
        e.preventDefault()
        const element = e.target

        const href = element.getAttribute('href')
        router.push(href, undefined, { shallow: true }).then(() => {
                setTimeout(
                    ()=>{
                        const idSection = element.getAttribute('itemProp')
                        const to = document.querySelector(idSection)?.offsetTop - 100;
                        const elementHeight = document.querySelector(idSection).offsetHeight;
                        const windowHeight = window.innerHeight - 130
                        let position
                        if (windowHeight > elementHeight) {
                            position = (windowHeight - elementHeight)/2
                        }else{
                            position = 10;
                        }
                        smoothScrollTo(0, to - position, 300)
                    },50
            );
            
        })

    }
    /**
     * Smooth scroll animation
     * @param {int} endX: destination x coordinate
     * @param {int} endY: destination y coordinate
     * @param {int} duration: animation duration in ms
     */
    function smoothScrollTo(endX, endY, duration) {
        const startX = window.scrollX || window.pageXOffset;
        const startY = window.scrollY || window.pageYOffset;
        const distanceX = endX - startX;
        const distanceY = endY - startY;
        const startTime = new Date().getTime();

        duration = typeof duration !== 'undefined' ? duration : 400;

        // Easing function
        const easeInOutQuart = (time, from, distance, duration) => {
            if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
            return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
        };

        const timer = setInterval(() => {
            const time = new Date().getTime() - startTime;
            const newX = easeInOutQuart(time, startX, distanceX, duration);
            const newY = easeInOutQuart(time, startY, distanceY, duration);
            if (time >= duration) {
                clearInterval(timer);
            }
            window.scroll(newX, newY);
        }, 1000 / 60); // 60 fps
    };
    return <>

        <nav id="navigation" className="navbar navbar-expand-lg navbar-dark bg-one navigation shadow pt-4" style={{ height: '100px' }}>


            <div className='position-absolute end-0'>

                <button className="navbar-toggler m-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className='position-absolute start-0 m-3'>
                <Link href="/">
                    <a className="navbar-header logo-title px-2 px-xl-4">
                        <img src={LogoMain} className="img-fluid" alt="LogoADJaiara" width="55" height="55" />
                        <span className='d-none d-xl-inline'> <b>AD</b> JAIARA</span>
                    </a>
                </Link>
            </div>
            <div className="collapse navbar-collapse justify-content-center bg-one fs-6" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item text-center">
                        <Link href="/home" >
                            <a className="nav-link" itemProp='#intro' onClick={e => smoothScroolToId(e)}>HOME</a>
                        </Link>
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
                    {/* <li className="nav-item text-center">
                        <Link href="/home/igreja">
                            <a className="nav-link">A IGREJA</a>
                        </Link>
                    </li> */}
                    <li className="nav-item text-center">
                        <Link href="/home">
                            <a className="nav-link" itemProp='#agenda' onClick={e => smoothScroolToId(e)}>AGENDA</a>
                        </Link>
                    </li>
                    {/* <li className="nav-item text-center">
                        <Link href="/home/ministerios">
                            <a className="nav-link" >MINISTERIOS</a>
                        </Link>
                    </li> */}
                    <li className="nav-item text-center">
                        <Link href="/home/oracao">
                            <a className="nav-link">ORACAO</a>
                        </Link>
                    </li>
                    <li className="nav-item text-center">
                        <Link href="/home">
                            <a className="nav-link" itemProp='#ofertas' onClick={e => smoothScroolToId(e)}>OFERTAS</a>
                        </Link>
                    </li>
                    <li className="nav-item text-center">
                        <Link href="/home">
                            <a className="nav-link" itemProp='#contato' onClick={e => smoothScroolToId(e)}>CONTATO</a>
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>

    </>;
}

export default NavigationBar;