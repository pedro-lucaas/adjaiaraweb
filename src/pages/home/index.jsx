import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import Agenda from "../../component/Agenda";
import Contact from "../../component/Contact";
import Oferta from "../../component/Oferta";
import Intro from "../../component/Intro";

export default function HomePage(){
    return <>
        <Navbar />
        <Intro />
        <Agenda />
        <Oferta />
        <Contact />
        <Footer />
    </>
}