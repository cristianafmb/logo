import React, { useState } from "react";
import {  navigate } from "gatsby"

import "bootstrap/dist/css/bootstrap.min.css"
import { Row, Col, Button, Modal } from 'react-bootstrap'

import '../../sass/app.scss';
import Form from '../../components/form'


const CardEspecialidades = ({ title, details, button, href, img, alt , location}) => {
    var url = location.href
    var cardClass = "card-especialidades center";
    if (title === "Marcar Consulta") { cardClass = "card-especialidades center card-gold" }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        if (typeof document !== 'undefined') {
            var element = document.getElementById("marcacao");
        }
        // if there is an element with id #marcacao, then the path is https://upcare.pt/actualPage#marcacao
        if (typeof (element) !== 'undefined' && element != null) {
            if (!url.includes("#marcacao")) {
                navigate(url + "#marcacao")
            } else {
                var page = url.split("#marcacao")[0];
                navigate(page + "#marcacao")
            }
        }
        // if there is no element with id #marcacao, then show modal
        else {
            setShow(true)
        }
    };

    return (
        <div className={cardClass + " position-relative"}>
            <Row className="m-2 height-especialidades-img">
                <Col className="m-auto">
                    <img src={img} alt={alt} className="especialidades-img max-width-8vh" />
                </Col>
            </Row>
            <Row className="m-2 ">
                <Col>
                    <p className={title === "Marcar Consulta" ? "details-large white oLight" : "details-large oLight"}>
                        {title}
                    </p>
                </Col>
            </Row>
            <Row className="m-2 mt-4">
                <Col>
                    <p className={title === "Marcar Consulta" ? "details-xx-small white oRegular" : "details-xx-small oRegular"}>
                        {details}
                    </p>
                </Col>
            </Row>
            <Row className="m-2 mt-4 mb-4">
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

export default CardEspecialidades