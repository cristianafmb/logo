import React, { useEffect, useState } from "react";
import { Link } from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';

import '../../sass/app.scss';
import { Row, Col } from 'react-bootstrap';


const MiniCorpoClinico = ({ corpoclinico }) => {
    return (
        <Row className="position-relative">
            <p className="head-x-small oBold mb-4">Corpo Clínico</p>
            {corpoclinico.map((item, i) => (
                <Col key={"mini-"+i}>
                     <img src={item.img} alt={item.alt} className="user-icon icon-clinico" />
                     <p className="head-xx-small  oMedium mt-3">{item.name}</p>       
                     <p className="head-xx-small light-gold oMedium">{item.occupation}</p>       
                </Col>

            ))}

        </Row>
    )
}

export default MiniCorpoClinico
