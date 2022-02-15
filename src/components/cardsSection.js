import * as React from "react";

import "bootstrap/dist/css/bootstrap.min.css"

import '../sass/app.scss';

import { Row, Col, Button } from 'react-bootstrap';

const CardsSection = ({ data }) => {
    return (
        <div className="container-corpo-clinico mt-5 position-relative">
            <Row className="max-width">
                {data.map((item, i) => (

                    <Col sm="12" md="2" lg="2" className="mb-4 col-page" key={"col" + i}>
                        <div className="bg-white height-max position-relative hover-border-gold position-relative min-height-45vh">

                            <div className="p-4">
                                <p className="head-medium mt-3 mb-4 oLight">{item.title}</p>
                                <p className="head-x-small gold line-height mb-50 oRegular">{item.details}</p>
                                <div className="max-width m-auto center">
                                    <Button className="btn-questoes btn btn-warning btn-sm btn-card-white oMedium" href={item.href}>
                                        {item.btntext}
                                    </Button>
                                </div>

                            </div>

                        </div>
                    </Col>

                ))}
            </Row>

        </div>
    )
}

export default CardsSection