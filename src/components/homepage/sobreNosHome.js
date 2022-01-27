import * as React from "react"

import '../../sass/app.scss';
import "bootstrap/dist/css/bootstrap.min.css"
import { Row, Col } from 'react-bootstrap';

import Testimony from '../../components/homepage/testimony'
import InfoSobreNos from '../../components/cardHeadTitleDetails'

const SobreNosHome = ({ testimony, sobreNos }) => {

    return (
        <div className="section-sobre-nos-home margin-sections position-relative">
            <Row>
                <Col sm="12" md="4" lg="4">
                    <Testimony img={testimony.img} alt={testimony.alt} quote={testimony.quote} person={testimony.person} tfunction={testimony.function} mobile={false} />
                </Col>
                <Col sm="1" md="1" lg="1" />
                <Col sm="12" md="7" lg="6" className="mb-4">
                    <InfoSobreNos head={sobreNos.head} title={sobreNos.subject} details={sobreNos.details} btn={sobreNos.btntext} btnlink={sobreNos.href} maxwidth="40"/>
                </Col>
            </Row>
        </div>
    )
}

export default SobreNosHome