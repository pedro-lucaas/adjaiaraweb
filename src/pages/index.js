import Image from 'next/image'
import Link from 'next/link'
const LogoMain = '/assets/images/adjaiara-logo2.png'

export default function Home() {
  return <>
    <div className="hero-area overlay">
      <div className="hero-video">
        <iframe className="hero-video" src="https://www.youtube.com/embed/zjsWjWWhNRQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=zjsWjWWhNRQ&iv_load_policy=3&playsinline=1"
          title="YouTube video player" frameBorder="0" allow="autoplay" allowFullScreen></iframe>
      </div>
      <div className="block">
        <Image src={LogoMain} width="150" height="150" alt="AD JAIARA" />
        <h1 > AD <b>JAIARA </b></h1>
        <p>Assembleia de Deus Vila Jaiara<br />
          Ministério de Anápolis</p>
        <Link href="/home" >
          <a className="btn btn-transparent shadow-lg"> ENTRAR</a>
        </Link>
      </div>

    </div>
  </>
}
