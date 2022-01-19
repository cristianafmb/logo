import React, { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../sass/app.scss';
import { Modal, Row, Col } from 'react-bootstrap'
import { Link } from "gatsby"
import closeButton from "../images/mobile/menu/close-btn-menu.svg"
import menuBtnMobile from "../images/mobile/btn-menu.svg"


const Menu = ({ footer }) => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    function renderSwitch(param) {
        switch (param) {
            case 0:
                return 'right';
            case 1:
                return 'center';
            case 2:
                return 'left';
            default:
                return 'center';
        }
    }
    const handleShow2 = () => {
        setShow2(true)

    };
    const handleHide2 = () => {
        setShow2(false)
        var elemento = document.getElementById("modal-menu");
        elemento.classList.add("fade-out")
    };


    return (
        <div className="position-relative">
            <div className="section-space-mobile ">
                <a href="/">
                    <img src={footer.logo} className="mt-4" />
                </a>
            </div>
            <div className="m-auto btn-menu-mobile"  >
                <img src={menuBtnMobile} onClick={handleShow2} aria-controls="example-fade-text" />
            </div>
            <div>
                {/*  <Modal id="modal-menu" show={show2} fullscreen={true} onHide={handleHide2} className={show2 ? "mobile-modal-menu fade-in" : "mobile-modal-menu fade-out"}>*/}
                <Modal id="modal-menu" show={show2} fullscreen={true} onHide={handleHide2} animation={false} className={show2 ? "fade-in" : "fade-out"} >


                    <div className="section-space-mobile ">
                        <a href="/">
                            <img src={footer.logowhite} className="mt-4" />
                        </a>
                    </div>
                    <div className="m-auto btn-menu-mobile"  >
                        <img src={closeButton} onClick={handleHide2} />
                    </div>
                    <Modal.Body>
                        <Row className="menu-mobile-options">
                            {footer.links.map((array, j) => (
                                <Col sm="12" md="12" lg="12" key={"row-footer-mobile-menu-" + j}>
                                    {j !== 0 ?
                                        < hr className="white" style={{ height: "2px" }} /> : ""
                                    }
                                    <Row>
                                        {array.map((item, k) => (
                                            <Col md="12" lg="12" sm="12" key={"col-footer-mobile-menu-text-" + k} >
                                                <Link to={item.link} className="footer-text center oMedium" >
                                                    {item.text}
                                                </Link>
                                            </Col>
                                        ))}
                                    </Row>
                                </Col>

                            ))
                            }
                        </Row>

                        <div className="footer-text-menu-mobile">
                            <Row className="m-auto half-width mb-4">
                                {footer.socialmedia.map((data, i) => (
                                    <Col className={renderSwitch(i)} key={"col-footer-mobile-menu-icons-" + i}>
                                        <a href={data.link} target="_blank">
                                            <img src={data.icon} alt={data.alt} className="footer-icons-mobile" />
                                        </a>
                                    </Col>
                                ))}
                            </Row>
                            {footer.copyrightsmobile.map((paragraph, j) => (
                                <Row className="center">
                                    <Col key={"col-footer-mobile-menu-paragraph-" + j}>
                                        <p className="footer-text oMedium">
                                            {paragraph}
                                        </p>
                                    </Col>
                                </Row>
                            ))}
                        </div>

                    </Modal.Body>

                </Modal>
            </div>


        </div>
    )
}
export default Menu