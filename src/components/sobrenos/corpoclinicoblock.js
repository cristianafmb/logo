import React, { useState } from "react";
import '../../sass/app.scss';
import "bootstrap/dist/css/bootstrap.min.css"

import $ from 'jquery' // important: case sensitive.
import { Row, Col, Modal } from 'react-bootstrap'
import { navigate } from 'gatsby'
import Form from "../form"

import Image from '../Images'

const CorpoClinicoBlock = ({ data, marcacaoRef }) => {

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
        <div className="margin-sections position-relative">

            <Row className="container-corpo-clinico m-auto">
                {data.people.map((item, i) => (
                    <Col className="col-corpoclinico-block mt-5 m-auto " key={"corpoclinicoblock" + i}>

                            <Image className="img-corpo-clinico-block " src={item.img.substring(10)} alt={item.alt} id={"first" + i} />
                            <div className=" max-width">
                                <p className="head-xx-small oMedium mt-3" id={"nameFirst" + i} > {item.name} </p>
                            </div>
                            <p className="head-xx-small light-gold oMedium " id={"occupationFirst" + i}> {item.occupation}</p>
                            <p className="head-xx-small light-gold oMedium  " id={"especialityFirst" + i}> {item.especiality}</p>
                       
                    </Col>
                ))}

            </Row >

            <div>

                <Modal
                    show={show} onHide={handleClose}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    className="modal-marcacao-rapida"
                >
                    <Modal.Body className="p-5">
                        <Form title="Pedido de Marcação Rápido" />
                    </Modal.Body>
                </Modal>
            </div>
        </div >
    )

}

export default CorpoClinicoBlock
