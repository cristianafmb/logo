import * as React from "react"

import 'bootstrap/dist/css/bootstrap.min.css';

import '../sass/app.scss';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Form from './form'





const PedidoMarcacoRapida = ({ img, alt, space, subpage }) => {
    // all form left
    if (img !== false) {
        return (
            <div className={space === true ? "space-sections position-relative" : "position-relative"} id="marcacao">
                <Row className="max-width  no-space-n-cols">
                    <Col sm="12" md="8" lg="8">
                        <Row className=" pl-5">
                            <Col sm="12" md="12" lg="12">
                                <Form title="Pedido de Marcação Rápido"/>
                            </Col>
                        </Row>

                    </Col>
                    <Col sm="12" md="4" lg="4" >
                        <img src={img} alt={alt} className="max-width " />
                    </Col>
                </Row>
            </div>
        )
    }
    // form in especialidades/... 
    else {
        return (
            <div className={space === true ? "space-sections" : ""} id="marcacao">
                <Row className="max-width no-space-n-cols">
                    <Col sm="12" md="12" lg="12">
                        <Row >
                            <Col sm="12" md="12" lg="12">
                                <Form title={subpage.title}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default PedidoMarcacoRapida
