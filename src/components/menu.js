import * as React from "react"
import '../../gatsby-browser'
import Nav from 'react-bootstrap/Nav'
import { Link } from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';
import { StaticImage } from "gatsby-plugin-image"

import '../sass/app.scss';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

const Menu = () => (
    <div>
        <Navbar variant="light" expand="md" className="table-menu">
            <Container>
                <Navbar.Brand href="/" className="logo-menu">
                    <StaticImage src="../images/Logo-Normal.png" alt="" />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/sobrenos">Sobre Nós</Nav.Link>
                    <Nav.Link href="/especialidades">Especialidades</Nav.Link>
                    <Nav.Link href="/medicinadentaria">Medicina Dentária</Nav.Link>
                    <Nav.Link href="/examesanalises">Exames & Análises</Nav.Link>
                    <Nav.Link href="/contactos">Contactos</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
)

export default Menu