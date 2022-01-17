import React, { useEffect, useState } from "react";
import { Link } from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';

import '../sass/app.scss';

import { Row, Col } from 'react-bootstrap';

import CardWhite from '../components/cardWhite'

const CardsSection = ({ data }) => {
    return (
        <div className="container-corpo-clinico mt-5 position-relative">
            <Row className="max-width">
                {data.map((item, i) => (
                    
                    <Col sm="12" md="2" lg="2" className="mb-4 col-20" key={"col"+i}>
                        <CardWhite data={item} />                       
                    </Col>

                ))}
            </Row>

        </div>
    )
}

export default CardsSection