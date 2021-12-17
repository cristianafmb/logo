import * as React from "react"
import '../../gatsby-browser'

import 'bootstrap/dist/css/bootstrap.min.css';
import CardIntroHome from '../components/cardIntroHome'
import Carousel from 'react-bootstrap/Carousel'
import '../sass/app.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const IntroHome = ({ data }) => {

    return (
        <div className="space-sections section-intro-home">
            <Carousel indicators={false} pause={true} nextIcon={<span aria-hidden="true" className="bi bi-arrow-left" />} prevIcon={false} fade={true}>
                {data.home.map((data, i) => (
                    <Carousel.Item key={i}>
                        <Row>
                            <Col sm="12" md="4" lg="4">
                                <CardIntroHome head={data.head} subject={data.subject} details={data.details} />
                            </Col>
                            <Col sm="12" md="8" lg="8">
                                <img src={data.img} alt={data.alt} className="banner-intro-home" />
                            </Col>
                        </Row>
                    </Carousel.Item  >

                ))}
            </Carousel>
        </div>
    )
}

export default IntroHome
