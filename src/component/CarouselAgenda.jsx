import React, { Component, useState } from 'react';
import Carousel, { consts } from 'react-elastic-carousel';
import week from './AgendaData'
import * as BsIcons from 'react-icons/bs'

const background = '/assets/images/backgrounds/bg-3.jpg'

function CarouselAgenda() {


    function myArrow({ type, onClick, isEdge }) {
        const pointer = type === consts.PREV ? <BsIcons.BsFillCaretLeftFill /> : <BsIcons.BsFillCaretRightFill />
        return (
            <button onClick={onClick} disabled={isEdge} className='arrow fs-3'>{pointer}</button>
        )
    }

    return (<div>
        <Carousel renderArrow={myArrow}  >
            {week.map((item) => {
            return (

                    <div className='d-flex flex-column' key={`${item.id}`}>
                        <div className='agenda-title'>
                            <h2 className='fs-4 p-0'>{item.title}</h2>
                        </div>
                        <div className='agenda-item p-0 m-0 py-3'>
                            {item.events.map((item,index) => {
                                return <p key={index} className='agenda-text fs-5 p-0 m-0'> <b>{item.name}</b> {item.time + 'H'}</p>
                            })}
                            {item.title === 'DOMINGO' ? <>
                                <p className='agenda-text fs-5 p-0 m-0 text-decoration-underline'><b> Programação especial </b></p>
                                <p className='agenda-text fs-5 p-0 m-0'><b>Kids</b>(03 a 10 anos)</p>
                                <p className='agenda-text fs-5 p-0 m-0'><b>Free Generation</b>(a partir de 11 anos)</p>
                            </>
                                : ''}
                        </div>
                    </div>

                );
            })}

        </Carousel>
    </div>
    )
}

export default CarouselAgenda;

