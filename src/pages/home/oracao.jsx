import Form from '../../component/Form'
import NavBar from "../../component/Navbar"
import Footer from "../../component/Footer"

const background = '/assets/images/backgrounds/bg-1.jpg'


export default function Oracao(props) {
    return (<>
    <NavBar />
        <section id="oracao" className="section bg-1 wow fadeIn" style={{ backgroundImage: `url(${background})`, paddingTop: '20vh' }}>
            <div className="container oracao col-12 col-md-9 col-lg-6 col-xxl-5">
                <div>
                    <div className="text-center row">
                        <h2 className="">Deixe-nos orar por você!</h2>
                        <div className="border"></div>
                        <h6 className="fw-lighter fst-italic ">&quot;Por estarem unidos com Cristo, vocês são fortes, o amor dele os anima, e vocês participam do Espírito de Deus.
                            E também são bondosos e misericordiosos uns com os outros.&quot; <b className="fw-bold">(Filipenses 2:1)</b> (NTLH) </h6>
                    </div>
                    <div className='row'>
                        <Form />
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </>
    )
}