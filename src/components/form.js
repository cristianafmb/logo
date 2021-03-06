import React, { useState } from "react"
import { Link } from "gatsby"
import axios from 'axios'
import { graphql, StaticQuery } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css"
import Radio from '@mui/material/Radio';
import { Row, Col, Modal } from 'react-bootstrap'

import $ from 'jquery/dist/jquery.slim' // importing this worked like a charm

const Formulario = ({ title }) => {

    const today = new Date()
    const [show, setShow] = useState(false);
    const [showError, setShowError] = useState(false);
    const [response, setResponse] = useState("")
    var checker = [];
    const [polCheck, setPolCheck] = useState(false)

    const handleClose = () => setShow(false);

    const handleCloseError = () => setShowError(false);
    const [errorResponse, setErrorResponse] = useState("")

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
                url: 'https://logo.pt/assets/website-form-contact.php',
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
            if (checker.length > 2) {
                setErrorResponse("Faltam preencher")
            } else {
                setErrorResponse("Falta preencher")
            }
        }
    }

    function checkValues() {
        checker = []
        let checkerTemp = []
        if (typeof document !== 'undefined') {
            if (!document.querySelector("#name").value) {
                checkerTemp.push(" Nome")
            }
            if (!document.querySelector("#email").value) {
                checkerTemp.push(" Email")
            }
            if (document.querySelector("#email").value) {
                if (!document.querySelector("#email").value.toLowerCase()
                    .match(
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    )) {
                        checkerTemp.push(" Email v??lido")
                }
            }
            if (!document.querySelector("#contact").value) {
                checkerTemp.push(" Telem??vel")
            }
            if (document.querySelector("#contact").value) {
                if(!$.isNumeric(document.querySelector("#contact").value) || document.querySelector("#contact").value.match(/\d/g).length!==9){
                    checkerTemp.push(" Telem??vel v??lido")
                }
            }
            if (document.querySelector("#especiality").value === "Especialidade") {
                checkerTemp.push(" Especialidade")
            }
            if (document.querySelector("#hours").value === "DEFAULT") {
                checkerTemp.push(" Hor??rio")
            }
            if (!document.querySelector("#date").value) {
                checkerTemp.push(" Data")
            }
            if (document.querySelector("#date").value) {
                const dateInput = new Date(document.querySelector("#date").value)
                var hours = document.querySelector("#hours").value.split("h");
                dateInput.setHours( hours[0] );
                dateInput.setMinutes( hours[1] );
                if (dateInput < today) {
                    checkerTemp.push(" Data v??lida")
                }
            }
            
        }

        if (!polCheck) {
            if (checkerTemp.length < 1) {
                checkerTemp.push(" aceitar os nossos termos e pol??ticas")
            } else {
                checkerTemp.push(" e aceitar os nossos termos e pol??ticas")
            }
        }
        checker = checkerTemp
    }


    const success = () => {
        setResponse("Mensagem enviada com sucesso!")
        if (typeof document !== 'undefined') {
            document.getElementById("form").reset();
            setPolCheck(false)
            title === "Pedido de Marca????o R??pido" ? document.querySelector("#especiality").value = "DEFAULT" : document.querySelector("#especiality").value = title

            document.querySelector("#hours").value = "DEFAULT"
            
            if (typeof window !== "undefined") {
                window.gtag("event", "Submit", {
                    event_category: "Formul??rio Consulta",
                    event_label: "Marca????o de Consulta",
                })
            }
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
                    <Modal show={show} onHide={handleClose} centered className="success-form">
                        <Modal.Header >
                            <Modal.Title>Sucesso!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Formul??rio Enviado.</Modal.Body>
                    </Modal>
                    <Modal show={showError} onHide={handleCloseError} centered className="">
                        <Modal.Header >
                            <Modal.Title>{errorResponse}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{response}</Modal.Body>
                    </Modal>
                    <div className='wrapper'>

                        <form method="POST" onSubmit={doSubmit} action="/" id="form">
                            <div className={title === "Pedido de Marca????o R??pido" ? "" : "pr-5 mt-5"}>
                                <p className="details-large oExtraBold">{title === "Pedido de Marca????o R??pido" ? "Pedido de Marca????o R??pido" : "Pedido de Marca????o de " + title}</p>
                                <p className="details-xx-small oRegular"> Preencha o formul??rio e aguarde o nosso contacto. Todos os campos s??o de preenchimento obrigat??rio</p>
                                <Row className="head-medium oLight">
                                    <Col sm="12" md="6" lg="6">
                                        <p className="mb-2">Dados Pessoais</p>
                                    </Col>
                                    <Col sm="12" md="6" lg="6" className="gx-0">
                                        <p className="mb-2">Dados da Consulta</p>
                                    </Col>
                                </Row>

                                <Row className="max-width ">
                                    <Col sm="12" md="6" lg="6" >

                                        <input className="input-form oMedium" type='text' id="name" name='name' placeholder='Nome' required />
                                        
                                    </Col>
                                    <Col sm="12" md="6" lg="6" >

                                        <select className="input-form oMedium"
                                            type="text"
                                            required
                                            placeholder="Especialidade"
                                            id="especiality"
                                            name="especiality"
                                            defaultValue={'DEFAULT'}
                                        >
                                            {title === "Pedido de Marca????o R??pido" ?
                                                <>
                                                    <option hidden disabled value="DEFAULT" >Especialidade </option>

                                                    <optgroup label="Especialidades M??dicas">
                                                        {data.formJson.EspMed.map((data, i) => (
                                                            <option value={data.title} key={"selectesp" + i}>{data.title}</option>
                                                        ))}
                                                    </optgroup>
                                                    <optgroup label="Medicina Dent??ria">
                                                        {data.formJson.MedDent.map((data, i) => (
                                                            <option value={data.title} key={"selectmeddent" + i}>{data.title}</option>
                                                        ))}
                                                    </optgroup>
                                                    <optgroup label="Exames M??dicos">
                                                        {data.formJson.ExaMed.map((data, i) => (
                                                            <option value={data.title} key={"selectexamed" + i}>{data.title}</option>
                                                        ))}
                                                    </optgroup>
                                                </>
                                                :
                                                <>

                                                    <optgroup label="Especialidades M??dicas">
                                                        {data.formJson.EspMed.map((data, i) => (

                                                            <option value={data.title === title ? "DEFAULT" : data.title} key={"selectesp" + i}>{data.title}</option>
                                                        ))}
                                                    </optgroup>
                                                    <optgroup label="Medicina Dent??ria">
                                                        {data.formJson.MedDent.map((data, i) => (
                                                            <option value={data.title === title ? "DEFAULT" : data.title} key={"selectmeddent" + i}>{data.title}</option>
                                                        ))}
                                                    </optgroup>
                                                    <optgroup label="Exames M??dicos">
                                                        {data.formJson.ExaMed.map((data, i) => (
                                                            <option value={data.title === title ? "DEFAULT" : data.title} key={"selectexamed" + i}>{data.title}</option>
                                                        ))}
                                                    </optgroup>
                                                </>


                                            }

                                        </select>
                                    </Col>
                                </Row>


                                <Row className="max-width  mt-2">
                                    <Col sm="12" md="6" lg="6" >
                                        <input className="input-form oMedium" type='text' id="contact" name='contact' placeholder='Telem??vel' />
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
                                            placeholder="Hor??rio"
                                            id="hours"
                                            name="hours"
                                            defaultValue={'DEFAULT'}
                                        >
                                            <option value="DEFAULT" disabled hidden>Hor??rio</option>
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
                                                Aceito que os dados por mim submetidos poder??o ser armazenados e utilizados de acordo com a {" "}

                                                <Link to="/politica-de-privacidade" className="underline d-inline head-xx-small  oMedium">
                                                    &nbsp;Pol??tica de Privacidade
                                                </Link>
                                                , para marca????o de consultas.
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

