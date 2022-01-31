import React, { useState } from "react";
import './Oracao.css'

import emailjs from "emailjs-com";

import background from '../assets/images/backgrounds/bg-1.jpg'

export default function Oracao() {
    const [status, setStatus] = useState({
        type: '',
        message: ''
    });


    function sendEmail(form) {
        form.preventDefault();

        if (validateForm(form.target)) {
            emailjs.sendForm(
                'service_qqkyqp5',
                'template_s1ellw7',
                form.target,
                'user_frb365CzjooTXckt7YGmh'
            ).then(() =>
                setStatus({
                    type: "success",
                    message: 'Estaremos orando por voce!'
                })
            ).then(
                document.getElementById("form").reset()
            ).catch(() =>
                setStatus({
                    type: "error",
                    message: "Desculpe! Houve um problema! Tente mais tarde."
                })
            )
        }
    }
    function validateForm(form) {
        const arr = [form.name.value, form.user_email.value, form.user_phone.value, form.message.value]
        if (arr.includes('')) {
            setStatus({
                type: "error",
                message: 'Preencha todos os campos por favor!'
            })
            return;
        }
        return true;
    }
    return <div>
        <section id="oracao" className="section bg-1 wow fadeIn" style={{ backgroundImage: `url(${background})`, paddingTop: '20vh' }}>
            <div className="container oracao d-flex col-12 col-md-9 col-lg-6 col-xxl-5">
                <form id="form" action="" className="row align-items-center justify-content-center px-5 " onSubmit={sendEmail}>
                    <div className="text-center">
                        <h2 className="">Deixe-nos orar por você!</h2>
                        <div className="border"></div>
                        <h6 className="fw-lighter fst-italic ">"Por estarem unidos com Cristo, vocês são fortes, o amor dele os anima, e vocês participam do Espírito de Deus.
                            E também são bondosos e misericordiosos uns com os outros."" <b className="fw-bold">(Filipenses 2:1)</b> (NTLH) </h6>
                    </div>

                    <div className="col-12 py-2">
                        <label htmlFor="">Nome<span>*</span></label>
                        <input type="text" name="name" className="form-control" />
                    </div>

                    <div className="col-12 py-2">
                        <label htmlFor="">E-mail<span>*</span></label>
                        <input type="email" name="user_email" className="form-control" />
                    </div>

                    <div className="col-12 py-2">
                        <label htmlFor="">Whatsapp<span>*</span></label>
                        <input type="text" name="user_phone" className="form-control" />
                    </div>

                    <div className="col-12 py-2">
                        <label htmlFor="">Mensagem<span>*</span></label>
                        <textarea name="message" rows="4" className="form-control" />
                    </div>

                    <div className="col-12 py-2 text-center">
                        {status.type === "error" && <p className="danger-alert">{status.message}</p>}
                        {status.type === "success" && <p className="success-alert">{status.message}</p>}
                        <input type="submit" value='Enviar' className="btn btn-transparent " />
                    </div>

                </form>
            </div>

        </section>
    </div>;
}