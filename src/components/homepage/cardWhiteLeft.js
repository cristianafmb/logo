import * as React from "react"

import "bootstrap/dist/css/bootstrap.min.css"
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import '../../sass/app.scss';

const CardWhiteLeft = ({ title, details, button, href }) => {

    return (
        <div className="card-white-left position-relative">
            <Row className="margin-l-05 ">
                <Col className="d-flex">
                    <p className="table-cell-vertical-middle details-large mt-2 oLight">
                        {title}
                    </p>
                </Col>
            </Row>
            <Row className="m-1 ">
                <Col>
                    <p className="details-xx-small table-cell-vertical-middle oRegular">
                        {details}
                    </p>
                </Col>
            </Row>
            <Row className="m-2 mt-4">
                <Col>
                    <Button href={href} className="especialidades-button oMedium">
                        {button}
                    </Button>
                </Col>
            </Row>
        </div>
    )
}

export default CardWhiteLeft