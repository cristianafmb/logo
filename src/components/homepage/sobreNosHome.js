import * as React from "react"

import '../../sass/app.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Testimony from '../../components/homepage/testimony'
import InfoSobreNos from '../../components/homepage/infoSobreNos'

const SobreNosHome = ({ testimony, sobreNos }) => {
    return (
        <div className="section-sobre-nos-home margin-sections position-relative">
            <Row>
                <Col sm="12" md="4" lg="4">
                    <Testimony img={testimony.img} alt={testimony.alt} quote={testimony.quote} person={testimony.person} tfunction={testimony.function} />
                </Col>
                <Col sm="1" md="1" lg="1" />
                <Col sm="12" md="7" lg="6" className="mb-4">
                    <InfoSobreNos head={sobreNos.head} subject={sobreNos.subject} details={sobreNos.details} />
                    <a href={sobreNos.href}>
                        <Button variant="warning" size="sm" className="button-intro-home-saber-mais oRegular">{sobreNos.button}</Button>
                    </a>
                </Col>
            </Row>
        </div>
    )
}

export default SobreNosHome