import React, { useState, useEffect } from "react";
import '../../sass/app.scss';
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"

import $ from 'jquery' // important: case sensitive.
import { Row, Col, Button, Modal } from 'react-bootstrap'

import Form from "../../components/form"

const CorpoClinico = ({ data, marcacaoRef }) => {
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
    const number_per_cols = Math.floor(data.people.length / 3);

    const first_col = data.people.slice(0, number_per_cols)

    const second_col = data.people.slice(number_per_cols, number_per_cols * 2)
    const third_col = data.people.slice(number_per_cols * 2, data.people.length)

    var currentFirstCol = 0;
    var currentSecondCol = 0;
    var currentThirdCol = 0;
    useEffect(() => {
        $('#firstCol0').addClass("top")
        $('#pNameFirstCol0').addClass("top")
        $('#pOccupationFirstCol0').addClass("top")
        $('#pEspecialityFirstCol0').addClass("top")

        $('#secondCol0').addClass("top-second")
        $('#pNameSecondCol0').addClass("top-second")
        $('#pOccupationSecondCol0').addClass("top-second")
        $('#pEspecialitySecondCol0').addClass("top-second")

        $('#thirdCol0').addClass("top-third")
        $('#pNameThirdCol0').addClass("top-third")
        $('#pOccupationThirdCol0').addClass("top-third")
        $('#pEspecialityThirdCol0').addClass("top-third")

        setTimeout(nextBackgroundFirstCol(), 5000);
        setTimeout(nextBackgroundSecondCol, 9000);
        setTimeout(nextBackgroundThirdCol, 6000);

        function nextBackgroundFirstCol() {
            $('#firstCol' + currentFirstCol).removeClass("top")
            $('#pNameFirstCol' + currentFirstCol).removeClass("top")
            $('#pOccupationFirstCol' + currentFirstCol).removeClass("top")
            $('#pEspecialityFirstCol' + currentFirstCol).removeClass("top")
            currentFirstCol = ++currentFirstCol % first_col.length
            $('#firstCol' + currentFirstCol).addClass("top")
            $('#pNameFirstCol' + currentFirstCol).addClass("top")
            $('#pOccupationFirstCol' + currentFirstCol).addClass("top")
            $('#pEspecialityFirstCol' + currentFirstCol).addClass("top")
            setTimeout(nextBackgroundFirstCol, 5000);
        }

        function nextBackgroundSecondCol() {
            $('#secondCol' + currentSecondCol).removeClass("top-second")
            $('#pNameSecondCol' + currentSecondCol).removeClass("top-second")
            $('#pOccupationSecondCol' + currentSecondCol).removeClass("top-second")
            $('#pEspecialitySecondCol' + currentSecondCol).removeClass("top-second")
            currentSecondCol = ++currentSecondCol % second_col.length
            $('#secondCol' + currentSecondCol).addClass("top-second")
            $('#pNameSecondCol' + currentSecondCol).addClass("top-second")
            $('#pOccupationSecondCol' + currentSecondCol).addClass("top-second")
            $('#pEspecialitySecondCol' + currentSecondCol).addClass("top-second")
            setTimeout(nextBackgroundSecondCol, 9000);
        }

        function nextBackgroundThirdCol() {
            $('#thirdCol' + currentThirdCol).removeClass("top-third")
            $('#pNameThirdCol' + currentThirdCol).removeClass("top-third")
            $('#pOccupationThirdCol' + currentThirdCol).removeClass("top-third")
            $('#pEspecialityThirdCol' + currentThirdCol).removeClass("top-third")
            currentThirdCol = ++currentThirdCol % second_col.length
            $('#thirdCol' + currentThirdCol).addClass("top-third")
            $('#pNameThirdCol' + currentThirdCol).addClass("top-third")
            $('#pOccupationThirdCol' + currentThirdCol).addClass("top-third")
            $('#pEspecialityThirdCol' + currentThirdCol).addClass("top-third")
            setTimeout(nextBackgroundThirdCol, 6000);
        }

    })
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
                                        <img className="img-corpo-clinico" src={item.img} id={"firstCol" + i} />
                                        <div className=" max-width">
                                            <p className="head-xx-small oMedium mt-3 p-corpo-clinico" id={"pNameFirstCol" + i} > {item.name} </p>
                                        </div>
                                        <p className="head-xx-small light-gold oMedium p-corpo-clinico" id={"pOccupationFirstCol" + i}> {item.occupation}</p>
                                        <p className="head-xx-small light-gold oMedium  p-corpo-clinico" id={"pEspecialityFirstCol" + i}> {item.especiality}</p>
                                    </div>
                                ))}
                            </div>
                        </Col>
                        <Col sm="12" lg="4" md="4" className="d-flex">
                            <div className="container-image-corpo-clinico position-relative">
                                {second_col.map((itemSecond, j) => (
                                    <div className="position-absolute">
                                        <img className="img-corpo-clinico" src={itemSecond.img} id={"secondCol" + j} />
                                        <div className=" max-width">
                                            <p className="head-xx-small oMedium mt-3 p-corpo-clinico" id={"pNameSecondCol" + j} > {itemSecond.name} </p>
                                        </div>
                                        <p className="head-xx-small light-gold oMedium p-corpo-clinico" id={"pOccupationSecondCol" + j}> {itemSecond.occupation}</p>
                                        <p className="head-xx-small light-gold oMedium  p-corpo-clinico" id={"pEspecialitySecondCol" + j}> {itemSecond.especiality}</p>
                                    </div>
                                ))}
                            </div>
                        </Col>
                        <Col sm="12" lg="4" md="4" className="d-flex">
                            <div className="container-image-corpo-clinico position-relative">
                                {third_col.map((itemThird, k) => (
                                    <div className="position-absolute">
                                        <img className="img-corpo-clinico" src={itemThird.img} id={"thirdCol" + k} />
                                        <div className=" max-width">
                                            <p className="head-xx-small oMedium mt-3 p-corpo-clinico" id={"pNameThirdCol" + k} > {itemThird.name} </p>
                                        </div>
                                        <p className="head-xx-small light-gold oMedium p-corpo-clinico" id={"pOccupationThirdCol" + k}> {itemThird.occupation}</p>
                                        <p className="head-xx-small light-gold oMedium  p-corpo-clinico" id={"pEspecialityThirdCol" + k}> {itemThird.especiality}</p>
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
