import React, { useEffect, useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button, Modal } from 'react-bootstrap'

import '../../sass/app.scss';
import Form from '../../components/form'


const CardEspecialidades = ({ title, details, button, href, img, alt }) => {
    var cardClass = "card-especialidades center";
    if (title === "Marcar Consulta") { cardClass = "card-especialidades center card-gold" }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        var element = document.getElementById("marcacao");
        // if there is an element with id #marcacao, then the path is https://upcare.pt/actualPage#marcacao
        if (typeof (element) != 'undefined' && element != null) {
            // if url is /especialidades/cardiologia for example, then add /especialidades/cardiologia#marcacao
            if(!window.location.href.includes("#marcacao")){
                window.location.href = window.location.href + "#marcacao"
            }
            // if there is already /especialidades/cardiologia#marcacao for example, put the same url /especialidades/cardiologia#marcacao to go to element with that id
            else{
                var page = window.location.href.split("#marcacao")[0];
                window.location.href = page+"#marcacao"
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
                    <img src={img} alt={alt} className="especialidades-img" />
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
                <Col>
                    <Button onClick={handleShow} className="especialidades-button oMedium">
                        {button}
                    </Button>
                </Col>
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