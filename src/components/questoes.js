import * as React from "react"

import 'bootstrap/dist/css/bootstrap.min.css';


import '../sass/app.scss';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const Questoes = ({ data }) => (
    <div className="container-questoes mt-5 position-relative">
        <Row>
            <Col sm="12" md="12" lg="12" className="no-space-n-cols">
                <hr className="gold" style={{ height: "2px" }} />
            </Col>
        </Row>
        <Row className="left">
            <Col sm="12" md="4" lg="4">
                <p className="details-large oExtraBold">{data.titulo}</p> 
                <p className="details-xx-small oRegular"> {data.texto} </p>
            </Col>

            <Col>
                <Row className="d-flex height-max  align-items-center">
                    {data.questoes.map((data, i) => (
                        <Col className="center" sm="12" md="4" lg="4" key={"questao"+i}>
                            <Button className="btn-questoes btn btn-warning btn-sm oMedium" href={data.link}>
                                {data.texto}
                            </Button>
                        </Col>
                    ))}
                </Row>

            </Col>

        </Row>
        <Row>
            <Col sm="12" md="12" lg="12" className="no-space-n-cols mb-5">
                <hr className="gold" style={{ height: "2px" }} />
            </Col>
        </Row>

    </div>
)


export default Questoes