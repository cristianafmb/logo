import React, {  useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css"
import { animated, useSpring } from "react-spring";
import '../sass/app.scss';
import { Modal, Row, Col } from 'react-bootstrap'
import { Link, navigate } from "gatsby"
import Image from './Images'

import $ from 'jquery/dist/jquery.slim' // importing this worked like a charm

const MenuMobile = ({ footer, marcacaoRef }) => {

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

    const [ setShow] = useState(false);

    const handleShow = () => {
        setShow2(false)
        
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
        <div className="position-relative">
            <div className="section-space-mobile pt-4">
                <Link to="/">
                    <Image src={footer.logomobile} className="logo-upcare " alt="logo logo-upcare " />
                </Link>
            </div>
            <div>
                <a href="tel:+351234426640" className="container-btn-marcacao-mobile" >

                    <svg height="18px" version="1.1" viewBox="0 0 18 18" width="18px" ><title /><desc /><defs /><g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1"><g fill="#C2A257" id="Icons-Communication" transform="translate(-85.000000, -126.000000)"><g id="phone" transform="translate(85.000000, 126.000000)"><path d="M3.6,7.8 C5,10.6 7.4,12.9 10.2,14.4 L12.4,12.2 C12.7,11.9 13.1,11.8 13.4,12 C14.5,12.4 15.7,12.6 17,12.6 C17.6,12.6 18,13 18,13.6 L18,17 C18,17.6 17.6,18 17,18 C7.6,18 0,10.4 0,1 C0,0.4 0.4,0 1,0 L4.5,0 C5.1,0 5.5,0.4 5.5,1 C5.5,2.2 5.7,3.4 6.1,4.6 C6.2,4.9 6.1,5.3 5.9,5.6 L3.6,7.8 L3.6,7.8 Z" id="Shape" /></g></g></g></svg>


                </a >

            </div>
            <div className="m-auto btn-menu-mobile"  >
                <svg
                    onClick={handleShow2}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#C2A257"
                    width="35" height="35" viewBox="0 0 50 50"
                >
                    <rect id="Retângulo_42" data-name="Retângulo 42" width="50" height="50" rx="25" fill="#3e3e3e" />
                    <g id="Grupo_238" data-name="Grupo 238">
                        <animated.rect width="26" height="3" transform="translate(12 17)" fill="#C2A257" style={first} />
                        <animated.rect width={show2 ? "26" : "20"} height="3" transform="translate(15 24)" fill="#" style={second} />
                        <animated.rect width="26" height="3" transform="translate(12 31)" fill="#C2A257" style={third} />
                    </g>

                </svg>
            </div>

            <div>
                {/*  <Modal id="modal-menu" show={show2} fullscreen={true} onHide={handleHide2} className={show2 ? "mobile-modal-menu fade-in" : "mobile-modal-menu fade-out"}>*/}
                <Modal id="modal-menu" show={show2} fullscreen={true} onHide={handleHide2} animation={false}  >


                    <div className="section-space-mobile pt-4 ">
                        <Link to="/">
                            <Image src={footer.logowhite} className="logo-upcare" alt="logo white" />
                        </Link>
                    </div>
                    <div className="m-auto btn-menu-mobile"  >
                        <svg
                            onClick={handleHide2}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#957841"
                            width="35" height="35" viewBox="0 0 50 50"
                        >
                            <rect id="Retângulo_42" data-name="Retângulo 42" width="50" height="50" rx="25" fill="#3e3e3e" />
                            <g id="Grupo_238" data-name="Grupo 238">
                                <animated.rect width="26" height="3" transform="translate(12 17)" fill="#C2A257" style={first} />
                                <animated.rect width={show2 ? "26" : "20"} height="3" transform="translate(15 24)" fill="#C2A257" style={second} />
                                <animated.rect width="26" height="3" transform="translate(12 31)" fill="#C2A257" style={third} />
                            </g>

                        </svg>
                    </div>
                    <Modal.Body>

                        <Row className="menu-mobile-options">
                            <div className="m-auto center">
                                <button onClick={handleShow} className="especialidades-button oMedium btn btn-primary">
                                    <p className="footer-text center gold oMedium">Marque uma consulta
                                        </p>
                                </button>
                            </div>
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
                                        <a href={data.link} target="_blank" rel="noreferrer">
                                            <Image src={data.icon} alt={data.alt} className="footer-icons-mobile" />
                                        </a>
                                    </Col>
                                ))}
                            </Row>
                            {footer.copyrightsmobile.map((paragraph, j) => (
                                <Row className="center" key={"row-footer-mobile-menu-paragraph-" + j}>
                                    <Col >
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
export default MenuMobile
