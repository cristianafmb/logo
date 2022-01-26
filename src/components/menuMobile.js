import React, { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { animated, useSprings, useSpring, to } from "react-spring";
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
        if (typeof document !== 'undefined') {
            var elemento = document.getElementById("modal-menu");
        }
        elemento.classList.add("fade-out")
    };

    const first = useSpring({
        transform: show2
            ? "translate(15px, 34px) rotate(-45deg)"
            : "translate(11px, 14px) rotate(0deg)"
    });
    const second = useSpring({
        transform: show2
            ? "translate(18px, 15px) rotate(45deg) "
            : "translate(14px, 22px) rotate(0deg)"
    });
    const third = useSpring({
        transform: show2
            ? "translate(16px, 33px) rotate(-45deg)"
            : "translate(11px, 30px) rotate(0deg)"
    });


    return (
        <div className="position-relative">
            <div className="section-space-mobile ">
                <a href="/">
                    <img src={footer.logo} className="mt-4" />
                </a>
            </div>
            <div className="m-auto btn-menu-mobile"  >
                <svg
                    onClick={handleShow2}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#957841"
                    width="50" height="50" viewBox="0 0 50 50"
                >
                    <rect id="Retângulo_42" data-name="Retângulo 42" width="50" height="50" rx="25" fill="#3e3e3e" />
                    <g id="Grupo_238" data-name="Grupo 238">
                        <animated.rect width="26" height="3" transform="translate(12 17)" fill="#d7c891" style={first} />
                        <animated.rect width={show2 ? "26" : "20"} height="3" transform="translate(15 24)" fill="#d7c891" style={second} />
                        <animated.rect width="26" height="3" transform="translate(12 31)" fill="#d7c891" style={third} />
                    </g>

                </svg>
            </div>
            <div>
                {/*  <Modal id="modal-menu" show={show2} fullscreen={true} onHide={handleHide2} className={show2 ? "mobile-modal-menu fade-in" : "mobile-modal-menu fade-out"}>*/}
                <Modal id="modal-menu" show={show2} fullscreen={true} onHide={handleHide2} animation={false}  >


                    <div className="section-space-mobile ">
                        <a href="/">
                            <img src={footer.logowhite} className="mt-4" />
                        </a>
                    </div>
                    <div className="m-auto btn-menu-mobile"  >
                        <svg
                            onClick={handleHide2}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#957841"
                            width="50" height="50" viewBox="0 0 50 50"
                        >
                            <rect id="Retângulo_42" data-name="Retângulo 42" width="50" height="50" rx="25" fill="#3e3e3e" />
                            <g id="Grupo_238" data-name="Grupo 238">
                                <animated.rect width="26" height="3" transform="translate(12 17)" fill="#d7c891" style={first} />
                                <animated.rect width={show2 ? "26" : "20"} height="3" transform="translate(15 24)" fill="#d7c891" style={second} />
                                <animated.rect width="26" height="3" transform="translate(12 31)" fill="#d7c891" style={third} />
                            </g>

                        </svg>
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