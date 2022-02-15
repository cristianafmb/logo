import * as React from "react"

import "bootstrap/dist/css/bootstrap.min.css"

import Image from '../components/Images'
import '../sass/app.scss';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Form from './form'





const PedidoMarcacoRapida = ({ img, alt, space, subpage, marcacaoRef, xl }) => {
    // all form left
    var classSpace = ""
    if (space) {
        classSpace = " container-devices space-sections position-relative"
    }
    else {
        classSpace = "container-devices position-relative"
    }
    if (img !== false) {
        return (
            <div className={classSpace} id="marcacao" ref={marcacaoRef}>
                <Row className="max-width  no-space-n-cols">
                    <Col sm="12" md="8" lg="8">
                        <Row >
                            <Col sm="12" md="12" lg="10">
                                <Form title="Pedido de Marcação Rápido" />
                            </Col>
                        </Row>

                    </Col>
                    <Col sm="12" md="4" lg="4" >
                        <Image src={img} alt={alt} className="max-width " />
                    </Col>
                </Row>
            </div>
        )
    }
    // form in especialidades/... 
    else {
        return (
            <div className={space === true ? "space-sections" : ""} id="marcacao" ref={marcacaoRef}>
                <Row className="max-width no-space-n-cols">
                    <Col sm="12" md="12" lg="12">
                        <Row >
                            <Col sm="12" md="12" lg="12">
                                <Form title={subpage.title} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default PedidoMarcacoRapida
