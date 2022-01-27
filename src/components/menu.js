import React, { useState } from "react";
import {  navigate } from "gatsby"

import '../sass/app.scss';
import { Container, Navbar, Nav, Modal, } from 'react-bootstrap'
import logo from '../images/logo.svg'
import calendario from '../images/calendar.svg'
import Form from "../components/form"


const Menu = ({ location }) => {
    var url = location.href
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        if (typeof document !== 'undefined') {
            var element = document.getElementById("marcacao");
        }
        // if there is an element with id #marcacao, then the path is https://upcare.pt/actualPage#marcacao
        if (typeof (element) != 'undefined' && element != null) {
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


    const [fullscreen, setFullscreen] = useState(true);
    const [show2, setShow2] = useState(false);

    function handleShow2(breakpoint) {
        setFullscreen(breakpoint);
        setShow2(true);
    }

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


    return (
        <div className="position-relative">

            <Navbar expand="lg" >
                <Container id="navbar">
                    <Navbar.Brand href="/" className="m-auto logo" ><img src={logo} alt="logo" className="m-auto" /></Navbar.Brand>
                    <Navbar.Collapse id="navbar-without-logo">
                        <Nav className="me-auto max-width">
                            <Nav.Link href="/sobrenos" className="oMedium m-auto navbar-letters">Sobre Nós</Nav.Link>
                            <Nav.Link href="/especialidades" className="oMedium m-auto navbar-letters">Especialidades</Nav.Link>
                            <Nav.Link href="/medicinadentaria" className="oMedium m-auto navbar-letters">Medicina Dentária</Nav.Link>
                            <Nav.Link href="/examesanalises" className="oMedium m-auto navbar-letters">Exames & Análises</Nav.Link>
                            <Nav.Link href="/contactos" className="oMedium m-auto navbar-letters">Contactos</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>
                <a className="container-btn-marcacao" onClick={handleShow}>
                    <div className="btn-icon-marcacao">
                        <img src={calendario} />
                    </div>

                    <div className="btn-text-marcacao">
                        <span className="oExtraBold details-small">Marcar Consulta</span>
                    </div>
                </a>
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

        </div>
    )
}
export default Menu