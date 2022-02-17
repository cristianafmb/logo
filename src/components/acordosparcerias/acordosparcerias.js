import * as React from "react";

import "bootstrap/dist/css/bootstrap.min.css"
import { Row, Col } from 'react-bootstrap'

import '../../sass/app.scss';
import Img from '../Images'

const AcordosParcerias = ({ data }) => {

    return (
        <div className="container-devices position-relative mt-5 mb-8vw margin-sections">
            <div className="container-devices">
                <div className="mt-5">
                    <p className="head-large oBold">{data.title}</p>
                </div>

                {data.parceiros.map((item, i) => (
                    <Row className="mt-2 center m-auto" key={"parceiro"+i}>
                        <Col md="12" lg="12" sm="12" className="mt-5">

                            <Img src={item.img} alt={item.alt} className="img-parceiros m-auto" />

                            <p className="details-small oMedium gold mt-2">{item.title}</p>
                            {item.details !== "" ?<p className="details-small oMedium gold mt-2">{item.details}</p>: ""}
                        </Col>
                    </Row>
                ))}

            </div>

        </div>
    )
}

export default AcordosParcerias