import Form from '../../component/Form'
import NavBar from "../../component/Navbar"
import Footer from "../../component/Footer"
import Contact from "../../component/Contact"

const background = '/assets/images/backgrounds/bg-3.jpg'


export default function Oracao(props) {
    return (<>
        <NavBar />
        <section id="oracao" className="wow fadeIn" style={{ backgroundImage: `url(${background})` }}>
            <div className='container-fluid d-flex justify-content-center  section background-opacity' style={{ paddingTop: '15rem' }}>
                <div className="call-to-action-2 oracao py-5 mb-5 col-12 col-md-9 col-lg-6 col-xxl-5" >
                    <div>
                        <div className="text-center row ">
                            <h2 className="fs-2">Deixe-nos orar por você!</h2>
                            <div className="border-form"></div>
                            <h6 className="fw-lighter fst-italic fs-6 pt-4">&quot;Por estarem unidos com Cristo, vocês são fortes, o amor dele os anima, e vocês participam do Espírito de Deus.
                                E também são bondosos e misericordiosos uns com os outros.&quot; <b className="fw-bold">(Filipenses 2:1)</b> (NTLH) </h6>
                        </div>
                        <Form />
                    </div>
                </div>

            </div>
            <Footer />
        

          
        </section>
    </>
    )
}