import { useState, useEffect } from "react"
import emailjs from 'emailjs-com'


export default function Form() {
    const [name, setName] = useState('');
    const [user_email, setEmail] = useState('');
    const [user_phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const [isLoading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    
    useEffect(()=>{
        setLoading(true)
        fetch('/api/emailjsResources')
        .then((res) => res.json())
        .then((data) =>{
            setData(data)
            setLoading(false)	
        })
    }, [])
    async function handleSubmit(event) {
        event.preventDefault()
        if (!name || !user_email || !user_phone || !message) {
            return;
        }
        const templateParams = {
            name,
            user_email,
            message
        }
        emailjs.send(
            data.resources.emailjsSevice,
            data.resources.emaisjsTemplate,
            templateParams,
            data.resources.emailjsUser,
        ).then(function (response) {
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
        }, function (error) {
            console.log('FAILED...', error);
        });
    }
    return (
        <form id="form" className="row oracao-form px-5" onSubmit={handleSubmit}>
            <input
                id="name"
                type="text"
                name="name"
                autoComplete="name"
                className="form-control py-3 my-1 fs-6 text-capitalize"
                placeholder="Nome"
                onChange={({ target }) => setName(target.value)}

                value={name}
            />
            <input
                id="user_email"
                type="email"
                name="user_email"
                autoComplete="user_email"
                className="form-control py-3 my-1 fs-6"
                placeholder="Email"
                onChange={({ target }) => setEmail(target.value)}

                value={user_email}
            />
            <input
                id="user_phone"
                type="text"
                name="user_phone"
                autoComplete="user_phone"
                className="form-control py-3 my-1 fs-6 "
                placeholder="Whatsapp"
                onChange={({ target }) => setPhone(target.value)}

                value={user_phone}
            />
            <textarea
                id="message"
                name="message"
                rows="4"
                autoComplete="message"
                className="form-control py-3 my-1 fs-6"
                placeholder="Mensagem"
                onChange={({ target }) => setMessage(target.value)}

                value={message}
            />
            <input type="submit" value="ENVIAR" className="btn btn-transparent py-2 my-2 offset-4 col fs-6" />

        </form>
    )
}