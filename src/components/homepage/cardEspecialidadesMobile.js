import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css"
import { Row, Col, Button, Modal } from 'react-bootstrap'
import Image from '../Images'
import {  navigate } from 'gatsby'
import '../../sass/app.scss';
import Form from '../form'
import $ from 'jquery/dist/jquery.slim' // importing this worked like a charm


const CardEspecialidadesMobile = ({ title, details, button, href, img, alt, marcacaoRef }) => {
    var cardClass = "card-especialidades center";
    if (title === "Marcar Consulta") { cardClass = "card-especialidades center card-gold" }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        // if there is an element with id #marcacao
        if ($('#marcacao').length > 0) {
            navigate('#marcacao')
            marcacaoRef.current.scrollIntoView();
        } else {
            // if there is no element with id #marcacao, then show modal
            setShow(true)
        }
    };

    return (
        <div className={cardClass + " position-relative"}>
            <Row className="m-3 height-especialidades-img mt-3">
                <Col className="m-auto ">
                    <Image src={img} alt={alt} className={title !== "Exames & Análises" ? "especialidades-img max-width-10vh m-auto" : "especialidades-img-analises max-width-8vh m-auto"} />
                </Col>
            </Row>
            <Row className="m-3 mt-5">
                <Col>
                    <p className={title === "Marcar Consulta" ? "details-x-large white oLight" : "details-x-large oLight"}>
                        {title}
                    </p>
                </Col>
            </Row>
            <Row className="m-3 mt-5">
                <Col>
                    <p className={title === "Marcar Consulta" ? "details-small white oRegular" : "details-small oRegular"}>
                        {details}
                    </p>
                </Col>
            </Row>
            <Row className="m-3 mt-5 mb-4">
                {title === "Marcar Consulta" ?
                    <Col>
                        <Button onClick={handleShow} className="especialidades-button oMedium">
                            {button}
                        </Button>
                    </Col>
                    :
                    <Col>
                        <Button href={href} className="especialidades-button oMedium">
                            {button}
                        </Button>
                    </Col>
                }
            </Row>

            <div>

                <Modal
                    show={show} onHide={handleClose}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    className="modal-marcacao-rapida"
                >
                    <Modal.Body >
                        <Form title="Pedido de Marcação Rápido" />
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    )
}

export default CardEspecialidadesMobile