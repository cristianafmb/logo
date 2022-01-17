import React, { useEffect, useState } from "react";
import { Link } from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';
import '../sass/app.scss';
import { Container, Navbar, Badge, Row, Col, Nav, Modal, Button, Fade } from 'react-bootstrap'
import logo from '../images/logo.svg'
import calendario from '../images/calendar.svg'
import Form from "./form"

import closeButton from "../images/mobile/menu/close-btn-menu.svg"
import logoMobile from "../images/mobile/menu/logo.svg"
import logoWhiteMobile from "../images/mobile/menu/logowhite.svg"
import menuBtnMobile from "../images/mobile/btn-menu.svg"
import { elementType } from "prop-types";


const Menu = ({ footer }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        var element = document.getElementById("marcacao");
        // if there is an element with id #marcacao, then the path is https://upcare.pt/actualPage#marcacao
        if (typeof (element) != 'undefined' && element != null) {
            if (!window.location.href.includes("#marcacao")) {
                window.location.href = window.location.href + "#marcacao"
            } else {
                var page = window.location.href.split("#marcacao")[0];
                window.location.href = page + "#marcacao"
            }
        }
        // if there is no element with id #marcacao, then show modal
        else {
            setShow(true)
        }
    };

    const [show2, setShow2] = useState(false);

    const handleShow2 = () => {
        setShow2(true)
        
    };
    const handleHide2 = () => {
        setShow2(false)
        var elemento = document.getElementById("modal-menu");
        elemento.classList.add("fade-out")
    };

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
    const [open, setOpen] = useState(false);

    return (
        <div className="position-relative">
            <div className="section-space-mobile ">
                <a href="/">
                    <img src={logoMobile} className="mt-4" />
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
                            <img src={logoWhiteMobile} className="mt-4" />
                        </a>
                    </div>
                    <div className="m-auto btn-menu-mobile"  >
                        <img src={closeButton} onClick={handleHide2} />
                    </div>

                    <Modal.Body>
                        <Row>
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


                        <Row className="m-auto half-width">
                            {footer.socialmedia.map((data, i) => (
                                <Col className={renderSwitch(i)} key={"col-footer-mobile-menu-icons-" + i}>
                                    <a href={data.link} target="_blank">
                                        <img src={data.icon} alt={data.alt} className="footer-icons-mobile" />
                                    </a>
                                </Col>
                            ))}
                        </Row>

                    </Modal.Body>
                </Modal>
            </div>

        
        </div>
    )
}
export default Menu