import * as React from "react"

import 'bootstrap/dist/css/bootstrap.min.css';

import '../../sass/app.scss';

import { Col, Row } from 'react-bootstrap'
import banner from '../../images/home/invisalign/banner.svg'

import CardWhiteLeft from "../../components/homepage/cardWhiteLeft";


const Invisalgin = ({ data }) => (
    <div className="mt-4 position-relative" >
        <Row className="max-width">
            <Col sm="12" md="8" lg="9" className="d-flex center position-relative">
                <img className="card-white-img" src={banner} alt={data.alt} />
                <p className="position-absolute oLight head-medium black p-over-image-invisalign">Reúna-se com o Invisalign provider e dê uma espreitadela no seu sorriso novo. Comece a transformar o seu sorriso imediatamente após o primeiro ajuste.</p>
            </Col>
            <Col sm="12" md="4" lg="3" className="d-flex">
                <CardWhiteLeft title={data.head} details={data.details} href={data.href} button={data.button}/>
            </Col>
        </Row>
    </div>
)

export default Invisalgin