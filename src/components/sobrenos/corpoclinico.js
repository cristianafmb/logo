import React, { useState, useEffect } from "react";
import '../../sass/app.scss';
import "bootstrap/dist/css/bootstrap.min.css"

import $ from 'jquery' // important: case sensitive.
import { Row, Col, Button, Modal } from 'react-bootstrap'

import Form from "../../components/form"

const CorpoClinico = ({ data, marcacaoRef }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        // if there is an element with id #marcacao
        if ($('#marcacao').length > 0) {
            marcacaoRef.current.scrollIntoView();
        } else {
            // if there is no element with id #marcacao, then show modal
            setShow(true)
        }
    };
    var currentFirst, currentSecond, currentThird
    currentFirst = currentSecond = currentThird = 0
    const number_per_cols = Math.floor(data.people.length / 3);

    const first_col = data.people.slice(0, number_per_cols)

    const second_col = data.people.slice(number_per_cols, number_per_cols * 2)
    const third_col = data.people.slice(number_per_cols * 2, data.people.length)

    var timer_first = 5000
    var timer_second = 9000
    var timer_third = 6000

    var class_first_top = "top"
    var class_second_top = "top-second"
    var class_third_top = "top-third"


    useEffect(() => {

        $('#first0').addClass(class_first_top)
        $('#nameFirst0').addClass(class_first_top)
        $('#occupationFirst0').addClass(class_first_top)
        $('#especialityFirst0').addClass(class_first_top)

        $('#second0').addClass(class_second_top)
        $('#nameSecond0').addClass(class_second_top)
        $('#occupationSecond0').addClass(class_second_top)
        $('#especialitySecond0').addClass(class_second_top)

        $('#third0').addClass(class_third_top)
        $('#nameThird0').addClass(class_third_top)
        $('#occupationThird0').addClass(class_third_top)
        $('#especialityThird0').addClass(class_third_top)

        setTimeout(nextBackgroundFirst, timer_first);
        setTimeout(nextBackgroundSecond, timer_second);
        setTimeout(nextBackgroundThird, timer_third);



        function nextBackgroundFirst() {
            $('#first' + currentFirst).removeClass(class_first_top)
            $('#nameFirst' + currentFirst).removeClass(class_first_top)
            $('#occupationFirst' + currentFirst).removeClass(class_first_top)
            $('#especialityFirst' + currentFirst).removeClass(class_first_top)
            currentFirst = ++currentFirst % first_col.length
            $('#first' + currentFirst).addClass(class_first_top)
            $('#nameFirst' + currentFirst).addClass(class_first_top)
            $('#occupationFirst' + currentFirst).addClass(class_first_top)
            $('#especialityFirst' + currentFirst).addClass(class_first_top)
            setTimeout(nextBackgroundFirst, timer_first);
        }

        function nextBackgroundSecond() {
            $('#second' + currentSecond).removeClass(class_second_top)
            $('#nameSecond' + currentSecond).removeClass(class_second_top)
            $('#occupationSecond' + currentSecond).removeClass(class_second_top)
            $('#especialitySecond' + currentSecond).removeClass(class_second_top)
            currentSecond = ++currentSecond % second_col.length
            $('#second' + currentSecond).addClass(class_second_top)
            $('#nameSecond' + currentSecond).addClass(class_second_top)
            $('#occupationSecond' + currentSecond).addClass(class_second_top)
            $('#especialitySecond' + currentSecond).addClass(class_second_top)
            setTimeout(nextBackgroundSecond, timer_second);
        }

        function nextBackgroundThird() {
            $('#third' + currentThird).removeClass(class_third_top)
            $('#nameThird' + currentThird).removeClass(class_third_top)
            $('#occupationThird' + currentThird).removeClass(class_third_top)
            $('#especialityThird' + currentThird).removeClass(class_third_top)
            currentThird = ++currentThird % second_col.length
            $('#third' + currentThird).addClass(class_third_top)
            $('#nameThird' + currentThird).addClass(class_third_top)
            $('#occupationThird' + currentThird).addClass(class_third_top)
            $('#especialityThird' + currentThird).addClass(class_third_top)
            setTimeout(nextBackgroundThird, timer_third);
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
                                    <div className="position-absolute" key={"first_col"+i}>
                                        <img className="img-corpo-clinico" src={item.img} alt={item.alt} id={"first" + i} />
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
                                    <div className="position-absolute" key={"second_col"+j}>
                                        <img className="img-corpo-clinico" src={itemSecond.img} alt={itemSecond.alt} id={"second" + j} />
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
                                    <div className="position-absolute" key={"third_col"+k}>
                                        <img className="img-corpo-clinico" src={itemThird.img} alt={itemThird.alt} id={"third" + k} />
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
                    <Modal.Body className="p-5">
                        <Form title="Pedido de Marcação Rápido" />
                    </Modal.Body>
                </Modal>
            </div>
        </div >
    )

}

export default CorpoClinico
