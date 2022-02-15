import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css"
import { Row, Col, Button, Modal } from 'react-bootstrap'

import '../../sass/app.scss';
import Img from '../Images'


const Covid = ({ data }) => {

    console.log(data)
    return (
        <div className="container-devices position-relative mt-5">
            <div className="container-devices">
                <div className="mt-5">
                    <p className="head-large oBold">{data.visitarSeguranca.title}</p>
                </div>
                <div >
                    <p className="head-medium oMedium">{data.visitarSeguranca.details}</p>
                </div>
                <Row className="mt-2 center m-auto">
                    {data.visitarSeguranca.passos.map((item, i) => (
                        <Col md="3" lg="3" sm="12" className="mt-5">

                            <Img src={item.img} alt={"passo" + i} className="img-passos m-auto" />

                            <p className="details-small oMedium gold mt-2">{item.details}</p>
                        </Col>
                    ))}
                </Row>
            </div>

        </div>
    )
}

export default Covid