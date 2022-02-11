import React, { useState, useEffect } from "react";
import '../../sass/app.scss';
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"

import $ from 'jquery' // important: case sensitive.
import { Row, Col, Button, Modal } from 'react-bootstrap'

import Form from "../../components/form"

const CorpoClinico = ({ data, marcacaoRef, first_col, second_col, third_col }) => {
    console.log(first_col, second_col, third_col)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        console.log('show')
        // if there is an element with id #marcacao
        if ($('#marcacao').length > 0) {
            marcacaoRef.current.scrollIntoView();
        } else {
            // if there is no element with id #marcacao, then show modal
            setShow(true)
        }
    };
   

   
   
    return (
        <div className="margin-sections position-relative">

            <Row className="container-corpo-clinico">
                <Col sm="12" md="4" lg="4" className="m-auto">
                    <p className="head-x-small oBold">{data.head}</p>
                    <p className="title-large oExtraBold mt-3 mb-5">{data.title}</p>
                    <p className="details-small mt-2 oRegular">{data.details}</p>
                    <Button onClick={handleShow} variant="warning" size="sm" className="button-intro-home-saber-mais btn-big oMedium">{data.btn.text}</Button>

                </Col>
                <Col sm="12" md="7" lg="7" style={{ marginLeft: "5px" }}>
                    <Row>
                        <Col sm="12" lg="4" md="4" className="d-flex">
                            <div className="container-image-corpo-clinico position-relative">
                                {first_col.map((item, i) => (
                                    <div className="position-absolute">
                                        <img className="img-corpo-clinico" src={item.img} id={"first" + i} />
                                        <div className=" max-width">
                                            <p className="head-xx-small oMedium mt-3 p-corpo-clinico" id={"nameFirst" + i} > {item.name} </p>
                                        </div>
                                        <p className="head-xx-small light-gold oMedium p-corpo-clinico" id={"occupationFirst" + i}> {item.occupation}</p>
                                        <p className="head-xx-small light-gold oMedium  p-corpo-clinico" id={"especialityFirst" + i}> {item.especiality}</p>
                                    </div>
                                ))}
                            </div>
                        </Col>
                        <Col sm="12" lg="4" md="4" className="d-flex">
                            <div className="container-image-corpo-clinico position-relative">
                                {second_col.map((itemSecond, j) => (
                                    <div className="position-absolute">
                                        <img className="img-corpo-clinico" src={itemSecond.img} id={"second" + j} />
                                        <div className=" max-width">
                                            <p className="head-xx-small oMedium mt-3 p-corpo-clinico" id={"nameSecond" + j} > {itemSecond.name} </p>
                                        </div>
                                        <p className="head-xx-small light-gold oMedium p-corpo-clinico" id={"occupationSecond" + j}> {itemSecond.occupation}</p>
                                        <p className="head-xx-small light-gold oMedium  p-corpo-clinico" id={"especialitySecond" + j}> {itemSecond.especiality}</p>
                                    </div>
                                ))}
                            </div>
                        </Col>
                        <Col sm="12" lg="4" md="4" className="d-flex">
                            <div className="container-image-corpo-clinico position-relative">
                                {third_col.map((itemThird, k) => (
                                    <div className="position-absolute">
                                        <img className="img-corpo-clinico" src={itemThird.img} id={"third" + k} />
                                        <div className=" max-width">
                                            <p className="head-xx-small oMedium mt-3 p-corpo-clinico" id={"nameThird" + k} > {itemThird.name} </p>
                                        </div>
                                        <p className="head-xx-small light-gold oMedium p-corpo-clinico" id={"occupationThird" + k}> {itemThird.occupation}</p>
                                        <p className="head-xx-small light-gold oMedium  p-corpo-clinico" id={"especialityThird" + k}> {itemThird.especiality}</p>
                                    </div>
                                ))}
                            </div>
                        </Col>

                    </Row>


                </Col>
            </Row >

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
        </div >
    )

}

export default CorpoClinico
