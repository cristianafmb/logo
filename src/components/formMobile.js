import React, { useState } from "react"
import { Link } from "gatsby"
import axios from 'axios'
import { graphql, StaticQuery } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css"
import Radio from '@mui/material/Radio';
import { Modal } from 'react-bootstrap'

import fbTrack from "../custom/fbTrack"


const FormMobile = ({ title }) => {
    const today = new Date()
    const [show, setShow] = useState(false);
    const [showError, setShowError] = useState(false);
    const [response, setResponse] = useState("")
    var checker = [];
    const [polCheck, setPolCheck] = useState(false)

    const handleClose = () => setShow(false);

    const handleCloseError = () => setShowError(false);


    function doSubmit(e) {
        checkValues();
        if (checker.length < 1) {

            e.preventDefault()
            var formData = new FormData()
            if (typeof document !== 'undefined') {
                formData.append('name', document.querySelector("#name").value)
                formData.append('especiality', document.querySelector("#especiality").value)
                formData.append('email', document.querySelector("#email").value)
                formData.append('contact', document.querySelector("#contact").value)
                formData.append('date', document.querySelector("#date").value)
                formData.append('hours', document.querySelector("#hours").value)
                formData.append("marcacaoRapida", true)
            }
            axios({
                url: 'https://invisual.pt/teste-form/website-form-contact.php',
                method: 'post',
                config: { headers: { 'Content-Type': 'multipart/form-data' } },
                data: formData
            })
                .then(res =>
                    res.data === "success"
                        ? success()
                        : setResponse("Mensagem enviada com sucesso!")

                )
            setShow(true)
        } else {
            e.preventDefault()
            setResponse("" + checker + ".");
            setShowError(true)
        }
    }

    function checkValues() {
        checker = []
        let checkerTemp = []
        if (typeof document !== 'undefined') {
            if (!document.querySelector("#name").value) {
                checkerTemp.push("Nome")
            }
            if (!document.querySelector("#email").value) {
                checkerTemp.push("Email")
            }
            if (!document.querySelector("#contact").value) {
                checkerTemp.push("Telefone")
            }
            if (document.querySelector("#especiality").value === "Especialidade") {
                checkerTemp.push("Especialidade")
            }
            if (document.querySelector("#hours").value === "Horário") {
                checkerTemp.push("Horário")
            }
            if (!document.querySelector("#date").value) {
                checkerTemp.push("Data")
            }
            if (document.querySelector("#date").value) {
                const dateInput = new Date(document.querySelector("#date").value)
                if (dateInput < today) {
                    checkerTemp.push("Data válida")
                }
            }
        }
        if (!polCheck) {
            if (checkerTemp.length < 1) {
                checkerTemp.push("aceitar os nossos termos e políticas")
            } else {
                checkerTemp.push("e aceitar os nossos termos e políticas")
            }
        }
        checker = checkerTemp
    }


    const success = () => {
        setResponse("Mensagem enviada com sucesso!")
        if (typeof document !== 'undefined') {
            title === "Pedido de Marcação Rápido" ? document.querySelector("#especiality").value = "DEFAULT" : document.querySelector("#especiality").value = title
            document.getElementById("form").reset();
            document.querySelector("#hours").value = "DEFAULT"
        }
        setPolCheck(false)
        fbTrack("trackCustom", "Envio de formulário Marcação Rápida - Página Home")
        {/* typeof window !== "undefined" &&
            window.gtag("event", "Submit", {
                event_category: "Submit Button",
                event_label: "Envio de formulário Marcação Rápida - Página Home",
            })*/}
    }

    return (
        <StaticQuery
            query={graphql`
        query FormJsonMobile {
            formJson {
                MedDent {
                  text
                  title
                }
                ExaMed {
                  text
                  title
                }
                EspMed {
                  text
                  title
                }
              }
        }`}
            render={data => (

                <div className="position-relative">
                    <Modal show={show} onHide={handleClose} centered className="">
                        <Modal.Header >
                            <Modal.Title>Sucesso!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Formulário Enviado.</Modal.Body>
                    </Modal>
                    <Modal show={showError} onHide={handleCloseError} centered className="">
                        <Modal.Header >
                            <Modal.Title>Faltam os seguintes campos</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{response}</Modal.Body>
                    </Modal>
                    <div className='wrapper'>

                        <form method="POST" onSubmit={doSubmit} action="/" id="form">
                            <div className={title === "Pedido de Marcação Rápido" ? "col-marcacao-rapida" : "pr-5 mt-5"}>
                                <p className="title-large oMedium mb-2">{title === "Pedido de Marcação Rápido" ? "Pedido de Marcação Rápido" : "Consulta de " + title}</p>
                                <p className="details-xx-small oRegular"> Preencha o formulário e aguarde o nosso contacto. Todos os campos são de preenchimento obrigatório</p>
                                <p className="head-medium oLight mt-3 mb-2">Dados Pessoais</p>

                                <input className="input-form oMedium mt-2" type='text' id="name" name='name' placeholder='Nome' required />

                                <input className="input-form oMedium mt-2" type='text' id="contact" name='contact' placeholder='Telemóvel' />

                                <input className="input-form oMedium mt-2" type="email" required placeholder="E-mail" name='email' id="email" />

                                <p className="head-medium oLight  mt-3 mb-2">Dados da Consulta</p>

                                <select className={ typeof document !== 'undefined'? (typeof (document.getElementById("marcacao")) !== 'undefined' && document.getElementById("marcacao") !== null ? "input-form oMedium mt-2" : "input-form white oMedium mt-2") : <></>}
                                    type="text"
                                    required
                                    placeholder="Especialidade"
                                    id="especiality"
                                    name="especiality"
                                    defaultValue={'DEFAULT'}
                                >
                                    {title === "Pedido de Marcação Rápido" ?
                                        <>
                                            <option hidden disabled value="DEFAULT" >Especialidade </option>

                                            <optgroup label="Especialidades Médicas">
                                                {data.formJson.EspMed.map((data, i) => (
                                                    <option value={data.title} key={"selectesp" + i}>{data.title}</option>
                                                ))}
                                            </optgroup>
                                            <optgroup label="Medicina Dentária">
                                                {data.formJson.MedDent.map((data, i) => (
                                                    <option value={data.title} key={"selectmeddent" + i}>{data.title}</option>
                                                ))}
                                            </optgroup>
                                            <optgroup label="Exames Médicos">
                                                {data.formJson.ExaMed.map((data, i) => (
                                                    <option value={data.title} key={"selectexamed" + i}>{data.title}</option>
                                                ))}
                                            </optgroup>
                                        </>
                                        :
                                        <option value="DEFAULT"  >{title} </option>
                                    }

                                </select>

                                <input className="input-form oMedium mt-2" type="date" required id="date" name="date" />

                                <select className="input-form oMedium mt-2 mb-4" type="text" required placeholder="Horário" id="hours" name="hours" defaultValue={'DEFAULT'} >
                                    <option value="DEFAULT" disabled hidden>Horário</option>
                                    <option value="9h30">9h30</option>
                                    <option value="10h30">10h30</option>
                                    <option value="11h30">11h30</option>
                                    <option value="12h30">12h30</option>
                                    <option value="13h30">13h30</option>
                                    <option value="14h30">14h30</option>
                                    <option value="15h30">15h30</option>
                                    <option value="16h30">16h30</option>
                                    <option value="17h30">17h30</option>
                                    <option value="18h30">18h30</option>
                                </select>
                                <div className="mb-5">
                                    <Radio checked={polCheck} size="small" onClick={() => setPolCheck(!polCheck)} id="politica" className="table-cell-vertical-middle">

                                    </Radio>
                                    <label className="table-cell-vertical-middle oMedium">
                                        <span className="d-inline head-xx-small oMedium">
                                            Aceito os dados por mim submetidos poderão ser armazenados e utilizados de acordo com a {" "}

                                            <Link to="/politica_de_privacidade" className="underline d-inline head-xx-small  oMedium">
                                                &nbsp;Política de Privacidade
                                            </Link>
                                            , para marcação de consultas.
                                        </span>
                                    </label>
                                </div>


                                <button className='btn-gold m-auto btn btn-warning btn-sm mb-5' type="submit" id='button' onClick={doSubmit}>
                                    <span className="oMedium">Enviar Pedido</span>
                                </button>
                            </div>



                        </form>
                    </div>
                </div>
            )}
        />
    )
}


export default FormMobile

