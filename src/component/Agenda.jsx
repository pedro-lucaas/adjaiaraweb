import React, { Component, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import styled from 'styled-components';
// const Container = <><div key={week[day].id} className="fs-2">{week[day].title}</div>
//     {week[day].eventos.map((element, index) => <div key={index} >{element.name} <b>{element.time ? '- ' + element.time : ''}</b> </div>
//     )}</>

const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 250px;
    width: 100%;
    background-color: #00008b;
    color: #fff;
    margin: 0 15px;
    font-size 4em:
`
const background = '/assets/images/backgrounds/bg-3.jpg'


class Agenda extends Component {

    state = {

        week: [
            {
                id: 0,
                title: 'Domingo',
                events: [
                    { name: 'Culto da manhã', time: '10:00' },
                    { name: 'Culto de Celebração', time: '18:00' },
                    { name: '*Especial - Kids(03 a 10 anos)' },
                    { name: 'Free Generation (a partir de 11 anos)' },
                ]

            },
            {
                id: 1,
                title: 'Segunda',
                events: [
                    { name: 'Tarde da benção', time: '14:00' },
                ]
            },
            {
                id: 2,
                title: 'Terça',
                events: [
                    { name: 'Culto de Ensino', time: '19:30' },
                ]
            },
            {
                id: 3,
                title: 'Quarta',
                events: [
                    { name: 'Consagração pelas Famílias', time: '8:00' },
                    { name: 'Discipulado', time: '20:00' },
                ]
            },
            {
                id: 4,
                title: 'Quinta',
                events: [
                    { name: 'Culto de Oração', time: '19:30' },
                ]
            },
            {
                id: 5,
                title: 'Sexta',
                events: [
                    { name: 'Culto de Adolescentes', time: '20:00' },
                ]
            },
            {
                id: 6,
                title: 'Sábado', events: [
                    { name: 'Culto de Jovens', time: '20:00' },
                ]
            }
        ]
    }


    render() {
        const items = this.state.week;
        const Comp = items.map(item => <div key={item.id}>{item.title}</div>)
        return (
            <div>
                <section id="agenda" className="section-sm bg-gr shadow-lg wow fadeInUp " style={{ backgroundImage: `url(${background})`}} >
                    <div className="row ">
                        {/* section title */}
                        <div className="title d-flex justify-content-center">
                            <h2 className="text-white">Cronograma Semanal<div className="title-border-2"></div></h2>
                            
                        </div>
                        {/* /section title */}
                        <div className="d-flex justify-content-center wow fadeInUp" >
                            <div className="col-12 col-sm-9 col-md-8 col-lg-6 col-xxl-5 text-center p-5">

                                <Carousel itemsToShow={1}>
                                    <Item>One</Item>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        )
    }
}

export default Agenda;

