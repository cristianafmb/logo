import * as React from "react"

import "bootstrap/dist/css/bootstrap.min.css"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import '../../sass/app.scss';
import CardEspecialidadesMobile from './cardEspecialidadesMobile'


const EspecialidadesHomeMobile = ({ especialidades, marcacaoRef }) => (
    <div className="section-space-mobile position-relative margin-sections">
        <Row>
            {especialidades.map((data, i) => (
                <Col sm="12" md="3" lg="3" className="padding-r-0 padding-l-7 mb-4" key={"card-especialidades-mobile-"+i}>
                    <CardEspecialidadesMobile title={data.title} details={data.details} button={data.titlemobile} href={data.href} img={data.img} alt={data.alt} marcacaoRef={marcacaoRef}/>
                </Col>
                
            ))}
        </Row>
    </div>
)

export default EspecialidadesHomeMobile