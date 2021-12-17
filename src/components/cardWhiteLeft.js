import * as React from "react"
import '../../gatsby-browser'

import 'bootstrap/dist/css/bootstrap.min.css';

import '../sass/app.scss';

import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const CardWhiteLeft = ({ title, details, button, href }) => {

    return (
        <div className="card-white-left">
            <Row className="margin-l-05 ">
                <Col>
                    <p className="table-cell-vertical-middle title-small">
                        {title}
                    </p>
                </Col>
            </Row>
            <Row className="m-1 ">
                <Col>
                    <p className="card-white-details table-cell-vertical-middle">
                        {details}
                    </p>
                </Col>
            </Row>
            <Row className="m-2 mt-4">
                <Col>
                    <Button href={href} className="card-white-button">
                        {button}
                    </Button>
                </Col>
            </Row>
        </div>
    )
}

export default CardWhiteLeft