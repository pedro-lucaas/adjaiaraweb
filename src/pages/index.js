import Image from 'next/image'
import Link from 'next/link'
const LogoMain = '/assets/images/adjaiara-logo2.png'

export default function Home() {
  return <>
    <div className="hero-area">
      <div className="overlay"></div>
      <div className='hero-video'>

        <iframe className='' src="https://www.youtube.com/embed/zjsWjWWhNRQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=zjsWjWWhNRQ&iv_load_policy=3&playsinline=1"
          title="YouTube video player" frameBorder="0" allow="autoplay" ></iframe>
      </div>

      <div class="container h-100">
        <div class="d-flex h-100 text-center align-items-center">
          <div class="w-100 text-white">
          <Image src={LogoMain} width="150" height="150" alt="AD JAIARA" />

            <h1 class=""><b>AD</b> JAIARA </h1>
            <p class="lead mb-0">Assembleia de Deus Vila Jaiara<br />
          Ministério de Anápolis</p>
          <Link href="/home" >
          <a className="btn btn-transparent shadow-lg fs-6"> ENTRAR</a>
        </Link>
          </div>
        </div>
      </div>
 


    </div>
    {/* <div>
        <div className='position-fixed start-50 top-50 translate-middle w-100'>

          </div>
      </div>
      <div className="block">
        <Image src={LogoMain} width="150" height="150" alt="AD JAIARA" />
        <h1 className='fs-1'> AD <b>JAIARA </b></h1>
        <p>Assembleia de Deus Vila Jaiara<br />
          Ministério de Anápolis</p>
        <Link href="/home" >
          <a className="btn btn-transparent shadow-lg fs-6"> ENTRAR</a>
        </Link>
      </div> */}
  </>
}
