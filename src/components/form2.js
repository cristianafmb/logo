import React, { useState, useRef } from "react"
import styled from 'styled-components'
import axios from 'axios'

const Form = () => {
    const form = useRef()

    const [success, setSuccess] = useState(false)

    const name = useRef(null);
    const contact = useRef(null);
    const email = useRef(null);
    const message = useRef(null);
    const info = useRef(null);
    const [isCheckedTerms, setIsCheckedTerms] = useState(false);

    const handleOnChange = () => {
        setIsCheckedTerms(!isCheckedTerms);
    };

    const formSubmit = (e) => {
        // e.preventDefault()
        const formData = new FormData()
        formData.append('name', name.current.value)
        formData.append('email', email.current.value)
        formData.append('contact', contact.current.value)
        formData.append('message', message.current.value)
        formData.append('info', info.current.value)
        axios({
            url: 'https://invisual.pt/teste-form/website-form-contact.php',
            method: 'post',
            config: { headers: { 'Content-Type': 'multipart/form-data' } },
            data: formData
        }).then(() => {
            //this.setState({
             //   contactEmail: 'success',
             //   contactMessage: '<h1>Obrigada pelo seu contacto!</h1><p>entraram em contacto consigo.</p>'
            //});
            console.log('success');
            setSuccess(true)
            form.current.reset()
        })
    }

    return (
        <div>
            <div className='wrapper'>
                <h2>Envie-nos uma Mensagem</h2>
                <form method="POST" ref={form} onSubmit={formSubmit} action="/">
                    <div className='input-box' id='name'>
                        <input type='text' name='Name' placeholder=' ' ref={name} required />
                        <label htmlFor='name'>Nome *</label>
                    </div>
                    <div className='input-box' id='email' >
                        <input type='email' name='Email' placeholder=' ' required ref={email} />
                        <label htmlFor='email'>Email *</label>
                    </div>
                    <div className='input-box' id='contact' >
                        <input type='number' name='Contact' placeholder=' ' ref={contact} />
                        <label htmlFor='contact'>Contact</label>
                    </div>
                    <div className='input-box' id='message' >
                        <label htmlFor='message'>Mensagem *</label>
                        <textarea name='Message' placeholder=' ' rows="8" required ref={message} />
                    </div>
                    <div className='input-box' id='info' ref={info}>
                        <span><b>* CAMPOS DE PREENCHIMENTO OBRIGATÓRIO</b></span><br /><br />
                        <span>Aenean varius lorem at turpis pellentesque, vitae malesuada eros blandit. Vivamus in velit ex. Vivamus ultricies nunc in erat rhoncus molestie. Phasellus et mauris ligula. Etiam vehicula eu felis nec interdum. Integer cursus ultrices urna, at efficitur eros hendrerit ac.</span>
                    </div>
                    <div>
                    <input
                                type="checkbox"
                                id="termos"
                                name="termos"
                                value="agree"
                                checked={isCheckedTerms}
                                onChange={handleOnChange}
                            />
                            Concorda com os dados
                    </div>
                    <button className='btn' type="submit" id='button'>
                        <span>Enviar Mensagem</span>
                    </button>
                    {success &&
                        <div className='success'>
                            <p><b>Obrigado pelo contacto ✓</b></p>
                            <p>Recebemos o seu e-mail e responderemos assim que possível.</p>
                        </div>
                    }
                </form>
            </div>
        </div>
    )
}


export default Form
