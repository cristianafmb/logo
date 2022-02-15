import * as React from "react"

import "bootstrap/dist/css/bootstrap.min.css"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import '../../sass/app.scss';
import CardEspecialidades from '../homepage/cardEspecialidades'


const EspecialidadesHome = ({ especialidades, location, marcacaoRef, xl }) => (
    <div className={xl ? "container-xl-devices space-sections position-relative": "space-sections position-relative"}>
        <Row className="mt-4" style={{width: "99%"}}>
            {especialidades.map((data, i) => (
                <Col sm="12" md="6" lg="3" className="padding-r-0 padding-l-7" key={"card-especialidades-"+i}>
                    <CardEspecialidades title={data.title} details={data.details} button={data.button} href={data.href} img={data.img} alt={data.alt} location={location} marcacaoRef={marcacaoRef}/>
                </Col>
                
            ))}
        </Row>
    </div>
)

export default EspecialidadesHome