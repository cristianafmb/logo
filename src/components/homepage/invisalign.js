import * as React from "react"

import "bootstrap/dist/css/bootstrap.min.css"

import Image from '../Images'

import '../../sass/app.scss';

import { Col, Row } from 'react-bootstrap'
import CardWhiteLeft from "./cardWhiteLeft";


const Invisalign = ({ data, medium, xl }) => (
    <div className="container-devices mt-5 position-relative pt-4">
        <Row className="max-width">
            <Col sm="12" md="8" lg="9" className="d-flex center position-relative ps-4 gx-0">
                <Image src={data.img} className="card-white-img"  alt={data.alt} />
                <p className="position-absolute oLight head-medium black p-over-image-invisalign">{data.textoverimg}</p>
            </Col>
            <Col sm="12" md="4" lg="3" className="d-flex">
                <CardWhiteLeft title={data.head} details={data.details} href={data.href} button={data.button} medium={medium}/>
            </Col>
        </Row>
    </div>
)

export default Invisalign