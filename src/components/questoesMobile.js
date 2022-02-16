import * as React from "react"

import "bootstrap/dist/css/bootstrap.min.css"


import '../sass/app.scss';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const QuestoesMobile = ({ data }) => (
    <div className="container-questoes mt-8vw position-relative">
    
            <hr className="gold" style={{ height: "2px" }} />

            <p className="title-large oMedium mt-4 mb-4">{data.titulo}</p>

            <div className="section-intro-home mb-3">
                <p className="details-xx-small oRegular"> {data.texto} </p>
            </div>



            <Row className="left">

                <Col>
                    <Row className="d-flex height-max  align-items-center">
                        {data.questoes.map((data, i) => (
                            <Col className="center" sm="12" md="4" lg="4" key={"questao" + i}>
                                <Button className="btn-questoes btn btn-warning btn-sm oMedium mt-4 max-width" href={data.link}>
                                    {data.texto}
                                </Button>
                            </Col>
                        ))}
                    </Row>

                </Col>

            </Row>
            <Row>
                <Col sm="12" md="12" lg="12" className="no-space-n-cols mt-3">
                    <hr className="gold" style={{ height: "2px" }} />
                </Col>
            </Row>
      
    </div>
)


export default QuestoesMobile