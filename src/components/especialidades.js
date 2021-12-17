import * as React from "react"
import '../../gatsby-browser'

import 'bootstrap/dist/css/bootstrap.min.css';

import '../sass/app.scss';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardEspecialidades from '../components/cardEspecialidades'


const Especialidades = ({ especialidades }) => (
    <div className="space-sections">
        <Row className="m-4">
            {especialidades.map((data, i) => (
                <><Col sm="12" md="3" lg="3" className="padding-r-0 padding-l-7" >
                    <CardEspecialidades title={data.title} details={data.details} button={data.button} href={data.href} img={data.img} alt={data.alt} />
                </Col>
                </>
            ))}
        </Row>
    </div>
)

export default Especialidades