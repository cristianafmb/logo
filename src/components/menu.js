import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'gatsby'
import '../sass/app.scss';
import { Container, Navbar, Nav, Modal, } from 'react-bootstrap'
import logo from '../images/logo.png'
import calendario from '../images/calendar.png'
import Form from "../components/form"
import $ from 'jquery/dist/jquery.slim' // importing this worked like a charm

const Menu = ({ marcacaoRef }) => {

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

    return (
        <div className="position-relative">

            <Navbar expand="lg" >
                <Container id="navbar">
                    <Navbar.Brand className="m-auto logo" >
                        <Link to="/">
                            <img src={logo} alt="logo" className="m-auto" />
                        </Link>
                    </Navbar.Brand>
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
                <button  className="container-btn-marcacao" onClick={handleShow}>
                    <div className="btn-icon-marcacao">
                        <img src={calendario} alt="calendar" />
                    </div>

                    <div className="btn-text-marcacao">
                        <span className="oExtraBold details-small">Marcar Consulta</span>
                    </div>
                </button >
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