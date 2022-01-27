import React, { useState, useRef } from "react"
import { Link } from "gatsby"
import axios from 'axios'
import { graphql, StaticQuery } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css"
import Radio from '@mui/material/Radio';
import { Row, Col, Modal, Button } from 'react-bootstrap'


import fbTrack from "../custom/fbTrack"


const Formulario = ({ data, title }) => {
    
    const today = new Date()
    const [show, setShow] = useState(false);
    const [showError, setShowError] = useState(false);
    const [response, setResponse] = useState("")
    var checker = [];
    var checkerTemp = [];
    const [polCheck, setPolCheck] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCloseError = () => setShowError(false);
    const handleShowError = () => setShowError(true);


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
            if (document.querySelector("#especiality").value == "Especialidade") {
                checkerTemp.push("Especialidade")
            }
            if (document.querySelector("#hours").value == "Horário") {
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
            document.getElementById("form").reset();
            setPolCheck(false)
            title === "Pedido de Marcação Rápido" ? document.querySelector("#especiality").value = "DEFAULT" : document.querySelector("#especiality").value = title

            document.querySelector("#hours").value = "DEFAULT"
            fbTrack("trackCustom", "Envio de formulário Marcação Rápida - Página Home")
            {/* typeof window !== "undefined" &&
            window.gtag("event", "Submit", {
                event_category: "Submit Button",
                event_label: "Envio de formulário Marcação Rápida - Página Home",
            })*/}
        }

    }

    return (
        <StaticQuery
            query={graphql`
        query FormJson {
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
                                <p className="details-large oExtraBold">{title === "Pedido de Marcação Rápido" ? "Pedido de Marcação Rápido" : "Pedido de Marcação de " + title}</p>
                                <p className="details-xx-small oRegular"> Preencha o formulário e aguarde o nosso contacto. Todos os campos são de preenchimento obrigatório</p>
                                <Row className="head-medium oLight">
                                    <Col sm="12" md="6" lg="6">
                                        <p>Dados Pessoais</p>
                                    </Col>
                                    <Col sm="12" md="6" lg="6">
                                        <p>Dados da Consulta</p>
                                    </Col>
                                </Row>

                                <Row className="max-width ">
                                    <Col sm="12" md="6" lg="6" >

                                        <input className="input-form oMedium" type='text' id="name" name='name' placeholder='Nome' required />

                                    </Col>
                                    <Col sm="12" md="6" lg="6" >
                                       
                                        <select className={typeof document === 'undefined' ? <></> : (typeof (document.getElementById("marcacao")) != 'undefined' && document.getElementById("marcacao") != null ? "input-form oMedium" : "input-form white oMedium")}
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
                                    </Col>
                                </Row>


                                <Row className="max-width  mt-2">
                                    <Col sm="12" md="6" lg="6" >
                                        <input className="input-form oMedium" type='text' id="contact" name='contact' placeholder='Telemóvel' />
                                    </Col>
                                    <Col sm="12" md="6" lg="6" >
                                        <input className="input-form oMedium"
                                            type="date"
                                            required
                                            id="date"
                                            name="date"
                                        />
                                    </Col>
                                </Row>


                                <Row className="max-width  mt-2">
                                    <Col sm="12" md="6" lg="6" >
                                        <input className="input-form oMedium"
                                            type="email"
                                            required
                                            placeholder="E-mail"
                                            name='email'
                                            id="email"
                                        />
                                    </Col>
                                    <Col sm="12" md="6" lg="6" >
                                        <select className="input-form oMedium"
                                            type="text"
                                            required
                                            placeholder="Horário"
                                            id="hours"
                                            name="hours"
                                            defaultValue={'DEFAULT'}
                                        >
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
                                    </Col>
                                </Row>

                                <Row className="mt-4">
                                    <Col sm="12" md="9" lg="9">
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

                                    </Col>
                                    <Col sm="12" md="2" lg="2" className="center m-auto">
                                        <button className='button-intro-home-saber-mais m-auto btn btn-warning btn-sm' type="submit" id='button' onClick={doSubmit}>
                                            <span className="oMedium">Enviar Pedido</span>
                                        </button>
                                    </Col>

                                </Row>



                            </div>



                        </form>
                    </div>
                </div>
            )}
        />
    )
}


export default Formulario

