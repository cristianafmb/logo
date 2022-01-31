import * as React from "react"

import "bootstrap/dist/css/bootstrap.min.css"

import '../sass/app.scss';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import FormMobile from './formMobile'

const PedidoMarcacoRapidaMobile = ({ img, alt, space, subpage, marcacaoRef }) => {
    // all form left
    if (img !== false) {
        return (
            <div className={space === true ? "space-sections position-relative section-space-mobile" : "position-relative section-space-mobile"} id="marcacao" ref={marcacaoRef}>
                <FormMobile title="Pedido de Marcação Rápido" />
                <Row className="max-width  no-space-n-cols">
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
            <div className={space === true ? "space-sections" : ""} id="marcacao" ref={marcacaoRef} >
                <div className="max-width no-space-n-cols">
                    <FormMobile title={subpage.title} />
                </div>
            </div>
        )
    }
}

export default PedidoMarcacoRapidaMobile
