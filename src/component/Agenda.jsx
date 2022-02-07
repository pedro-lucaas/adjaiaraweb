import React, { Component, useState } from 'react';
import Carousel, { consts } from 'react-elastic-carousel';
import styled from 'styled-components';
import week from './AgendaData'
import * as BsIcons from 'react-icons/bs' 

const Item = styled.div`
    display: flex;
    flex-direction: column;

`
const background = '/assets/images/backgrounds/bg-3.jpg'


class Agenda extends Component {
 
    
    myArrow({type,onClick, isEdge}){
        const pointer = type === consts.PREV ? <BsIcons.BsFillCaretLeftFill/> : <BsIcons.BsFillCaretRightFill/>
        return(
            <button onClick={onClick} disabled={isEdge} className='arrow'>{pointer}</button>
        )
      }
    render() {
        
        return (
            <div>
                <section id="agenda" className="section-sm bg-gr shadow-lg wow fadeInUp " style={{ backgroundImage: `url(${background})` }} >
                    <div className="row ">
                        {/* section title */}
                        <div className="title d-flex justify-content-center">
                            <h2 className="text-white fs-1">Cronograma Semanal<div className="title-border-2"></div></h2>

                        </div>
                        {/* /section title */}
                        <div className="d-flex call-to-action-2 justify-content-center wow fadeInUp" >
                            <div className="container col-12 text-center">
                                <Carousel renderArrow={this.myArrow} >
                                    {week.map((item) => {
                                        return (
                                            <>
                                                <Item className='d-flex flex-column'>
                                                    <div className='agenda-title'>
                                                        <h2 className='fs-2 p-0'>{item.title}</h2>
                                                    </div>
                                                    <div className='agenda-item p-0 m-0 py-3'>
                                                        {item.events.map((item) => {
                                                            return <p className='agenda-text fs-3 p-0 m-0'> <b>{item.name}</b> {item.time+'H'}</p>
                                                        })}
                                                    </div>
                                                </Item>
                                            </>
                                        );
                                    })}
                                   
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

