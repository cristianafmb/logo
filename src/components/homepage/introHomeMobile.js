import * as React from "react"

import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel'

import '../../sass/app.scss';
import CardIntroHome from './cardIntroHome'



function CustomRigthArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className + " m-auto calcell2 container-arrow-left-carousel position-relative"}
            style={{ ...style, display: "table-cell", width: "100%", textAlign: "center" }}
            onClick={onClick}
        >
            <svg id="Component_3_34" data-name="Component 3 – 34" xmlns="http://www.w3.org/2000/svg" width="135" height="21" viewBox="0 0 135 21">

                <g id="Group_10" data-name="Group 10" transform="translate(228 94.745) rotate(180)">

                    <g className="line" id="Group_8" data-name="Group 8" transform="translate(93 86.806)" >
                        <path id="Path_6" data-name="Path 6" className="cls-1" d="M107.5,125.879H93.439a.439.439,0,1,1,0-.879H107.5a.439.439,0,0,1,0,.879Z" transform="translate(-93 -125)" />
                    </g>
                    <g className="arrowhead" id="Group_9" data-name="Group 9" transform="translate(105.313 79.745)">
                        <path id="Path_7" data-name="Path 7" className="cls-1" d="M170.694,94.745a.425.425,0,0,1-.311-.137.487.487,0,0,1,0-.659l6.316-6.7-6.316-6.7a.486.486,0,0,1,0-.659.421.421,0,0,1,.621,0l6.937,7.363L171,94.608A.425.425,0,0,1,170.694,94.745Z" transform="translate(-170.255 -79.745)" />
                    </g>
                </g>
            </svg>
        </div>
    );
}


const IntroHome = ({ data }) => {
    return (
        <div className="section-intro-home margin-sections" >

            <Carousel indicators={false} pause={true} nextIcon={false} prevIcon={false} fade={true}>
                {data.home.map((data, i) => (
                    <Carousel.Item key={"card-intro-home" + i}>
                        <Row>
                            <Col sm="12" md="8" lg="8">
                                <img src={data.img} alt={data.alt} className="banner-intro-home max-width" />
                            </Col>
                            <Col sm="12" md="4" lg="4" >

                                <CardIntroHome head={data.head} subject={data.subject} details={data.details} />

                            </Col>

                        </Row>
                    </Carousel.Item  >

                ))}
            </Carousel>
        </div>
    )
}

export default IntroHome
