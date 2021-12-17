import * as React from "react"
import '../../gatsby-browser'

import 'bootstrap/dist/css/bootstrap.min.css';

import '../sass/app.scss';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardWhiteLeft from "../components/cardWhiteLeft";


const Invisalgin = ({ data }) => (
    <div className="mt-4 " >
        <Row className="row-card-invisalign">
            <Col sm="12" md="8" lg="9" className="col-card-invisalign center">
                <img className="card-white-img" src={data.img} alt={data.alt} />
            </Col>
            <Col sm="12" md="4" lg="3" className="col-card-invisalign">
                <CardWhiteLeft title={data.head} details={data.details} href={data.href} button={data.button}/>
            </Col>
        </Row>
    </div>
)

export default Invisalgin