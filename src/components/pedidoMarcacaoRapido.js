import * as React from "react"
import '../../gatsby-browser'

import 'bootstrap/dist/css/bootstrap.min.css';

import '../sass/app.scss';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from "gatsby"
import Form2 from '../components/form2'


const PedidoMarcacoRapida = ({ img }) => (
    <div className="space-sections">
        <Row className="width-max no-space-n-cols">
            <Col sm="12" md="8" lg="8">
                <Form2 />
            </Col>
            <Col sm="12" md="4" lg="4" >
                <img src={img.img}  alt={img.alt} className="width-max"/>
            </Col>
        </Row>
    </div>
)

export default PedidoMarcacoRapida
