import * as React from "react"
import '../../gatsby-browser'

import 'bootstrap/dist/css/bootstrap.min.css';

import '../sass/app.scss';

import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { data } from "jquery";


const CardEspecialidades = ({ title, details, button, href, img, alt }) => {
    var cardClass = "card-especialidades center";
    if (title === "Marcar Consulta") { cardClass = "card-especialidades center card-gold" }


    return (
        <div className={cardClass}>
            <Row className="m-2 ">
                <Col>
                    <img src={img} alt={alt} className="especialidades-img" />
                </Col>
            </Row>
            <Row className="m-2 ">
                <Col>
                    <p className="title-small">
                        {title}
                    </p>
                </Col>
            </Row>
            <Row className="m-2 ">
                <Col>
                    <p className="especialidades-details">
                        {details}
                    </p>
                </Col>
            </Row>
            <Row className="m-2 mt-4">
                <Col>
                    <Button href={href} className="especialidades-button">
                        {button}
                    </Button>
                </Col>
            </Row>
        </div>
    )
}

export default CardEspecialidades