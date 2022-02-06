import React from 'react';
import Cards from './Cards';
import Image from 'next/image';
const background = '/assets/images/backgrounds/bg-3.jpg'
const Logo = '/assets/images/adjaiara-logo-creme.png'
// import { Container } from './styles';#fc6e3d

function Banner() {
    return <div>
    <section id="intro" className="about section overly bg-1 banner" style={{ backgroundImage: `url(${background})` ,paddingTop:'15vh' }}>
        <div className='banner-container'>

        <div className='image-banner'>
            <Image src={Logo} width='4347' height='2577' alt="AD JAIARA" />
        </div>
            <p>Igreja Assembleia de Deus de Vila Jaiara</p>
        </div>

              
    </section>
</div>;
}

export default Banner;