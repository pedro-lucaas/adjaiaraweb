import React from 'react';
import Cards from './Cards';
import Image from 'next/image';
const background = '/assets/images/backgrounds/bg-3.jpg'
const Logo = '/assets/images/adjaiara-logo-creme.png'
// import { Container } from './styles';#fc6e3d

function Banner() {
    return <div>
        <section id="intro" className="about section overly bg-1 banner" style={{ backgroundImage: `url(${background})`, paddingTop: '10rem' }}>
            <div className='container banner-container'>
                <div className='row d-flex justify-content-center align-items-center' style={{ height: '400px' }}>
                    <div className='row justify-content-center'>

                        <div className='py-0 col-10 col-md-7 col-lg-6  col-xl-5'>
                            <Image src={Logo} width='2150' height='1260' alt="AD JAIARA" className='img-fluid' />
                        </div>
                        <p className='fs-6 py-0 my-0'>Igreja Assembleia de Deus de Vila Jaiara</p>
                    </div>
                </div>
            </div>


        </section>
    </div>;
}

export default Banner;