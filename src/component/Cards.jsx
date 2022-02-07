import React, { Component } from 'react';
import Link from 'next/link';

const Img1 = '/assets/images/banner/culto-online.jpg'
const Img2 = '/assets/images/banner/cultos-anteriores.jpg'
const card1 = { id: 0, title: "CULTO ONLINE", href: "/home/live", img: Img1 }
const card2 = { id: 1, title: "CULTOS ANTERIORES", href: "https://www.youtube.com/channel/UCb6GR-irIyMpSfsdrhPC7CQ", img: Img2 }
//const json = '[{"title":"Culto Online","href":"home/culto-online","img":"/static/media/culto-online.834feb41.jpg"},{"title":"Culto Anteriores","href":"https://www.youtube.com/channel/UCb6GR-irIyMpSfsdrhPC7CQ","img":"/static/media/cultos-anteriores.72c916ae.jpg"}]'

function Button(props) {
    if (props.href.includes('http')) {
        return (
        <div className='col-12 col-sm-6 text-end'>
            <a href={props.href} target="_blank" rel="noreferrer"className="btn btn-card m-0 p-1 px-5 fs-6 bg-one"> ASSISTIR</a>
        </div>
        )
    } else {
        return (
            <Link href={props.href}>
                <div className='col-12 col-sm-6 text-end'>
                    <a className='btn btn-card m-0 p-1 px-5 fs-6 bg-one'>ASSISTIR</a>
                </div>
            </Link>
        )
    }
}
export default class Cards extends Component {
    render() {
        let cards = [card1, card2]
        cards = cards.map((nome, index) => <div key={nome.id} className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 wow fadeInUp p-5 mh-50">
            <div className="card border-0 bg-none container" data-wow-duration="500ms" data-wow-delay="400ms">
                <img src={nome.img} className="card-img-top" alt="..." />
                <div className="card-body bg-none d-flex justify-content-between px-0 row">
                    <h2 className="card-title fs-3 fw-light col-12 col-sm-6">{nome.title} <div className="card-bord"></div> </h2>
                    <Button href={nome.href} />
                </div>
            </div>
        </div>)
        return (
            <React.Fragment>
                {cards}
            </React.Fragment>
        )
    }
}