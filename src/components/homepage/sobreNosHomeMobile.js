import * as React from "react"

import '../../sass/app.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

import {Row, Col, Button} from 'react-bootstrap';

import TestimonyMobile from './testimonyMobile'
import InfoSobreNosMobile from './infoSobreNosMobile'


const SobreNosHome = ({ testimony, sobreNos }) => {
    return (
        <div className="section-space-mobile margin-sections position-relative">

            <Row>
                <Col sm="12" md="7" lg="6" className="mb-4">
                    <InfoSobreNosMobile head={sobreNos.head} subject={sobreNos.subject} details={sobreNos.details} />
                 
                </Col>
                <Col sm="12" md="4" lg="4">
                    <TestimonyMobile img={testimony.img} alt={testimony.alt} quote={testimony.quote} person={testimony.person} tfunction={testimony.function} />
                </Col>
                <Col sm="1" md="1" lg="1" />
            </Row>
        </div>
    )
}

export default SobreNosHome