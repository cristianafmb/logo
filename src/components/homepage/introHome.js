import React from "react";

import "bootstrap/dist/css/bootstrap.min.css"
import { Row, Col, Carousel } from 'react-bootstrap';
import '../../sass/app.scss';

import CardIntroHome from './cardIntroHome'
import Arrow from '../arrow'


function CustomRigthArrow(props) {
    const { onClick } = props;
    return (
        <>
            <Arrow id="arrow-effect" rot={true} onClick={onClick} text="Próximo Slide"/>
        </>
    );
}


const IntroHome = ({ data, btntext, href }) => {
    return (
        <div className="section-intro-home margin-sections" >
            <Carousel indicators={false} pause={true} nextIcon={<CustomRigthArrow />} prevIcon={false} fade={true}>
                {data.home.map((data, i) => (
                    <Carousel.Item key={"card-intro-home" + i}>
                        <Row>
                            <Col sm="12" md="4" lg="4" >
                                <CardIntroHome head={data.head} subject={data.subject} details={data.details} btntext={data.btntext} href={data.href}/>

                            </Col>
                            <Col sm="12" md="8" lg="8">
                                <img src={data.img} alt={data.alt} className="banner-intro-home max-width" />
                            </Col>
                        </Row>
                    </Carousel.Item  >

                ))}
            </Carousel>
        </div>
    )
}

export default IntroHome
