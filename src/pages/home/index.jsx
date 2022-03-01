import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import Agenda from "../../component/Agenda";
import Contact from "../../component/Contact";
import Oferta from "../../component/Oferta";
import Intro from "../../component/Intro";
import Banner from "../../component/Banner";
import React from "react";

const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wow.js') : null

export default class HomePage extends React.Component {
    
    componentDidMount() {       
        new WOW().init()
    }
    render() {
        return <>
            <Navbar />
            <Banner />
            <Intro />
            <Agenda />
            <Oferta />
            <Contact />
            <Footer />
        </>
    }
}