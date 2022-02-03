import React, { useState, useEffect } from "react"
import '../../sass/app.scss';
import { Link } from "gatsby"
import Image from '../Images'

import "bootstrap/dist/css/bootstrap.min.css"

import { Row, Col, Button, Carousel } from 'react-bootstrap'
import Slider from "react-slick";
const CorpoClinico = ({ data }) => {

    var settings = {
        draggable: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        dots: false,
        arrows: false,
        swipe: false,
        fade: true,
        infinite: true,
        className: "corpo-clinico-slide"
    }

    return (
        <div className="margin-sections position-relative">
            <Row className="container-corpo-clinico">
                <Col sm="12" md="12" lg="12" className="m-auto">
                    <p className="head-x-small oBold">{data.head}</p>
                    <p className="title-large oExtraBold mt-3 mb-5">{data.title}</p>
                    <p className="details-small mt-2 oRegular">{data.details}</p>
                    <Link to={data.btn.link}>
                        <Button variant="warning" size="sm" className="button-intro-home-saber-mais btn-big oMedium">{data.btn.text}</Button>
                    </Link>
                </Col>
                <Col sm="12" md="7" lg="7" style={{ marginLeft: "5px" }}>

                    <Slider {...settings}>

                        {data.people.map((item, i) => (
                            <>
                                <Row >
                                    <Col className="left" sm="12" md="4" lg="4" key={"dr" + i}>
                                        <div>
                                            <img src={item[0].img} style={{ width: "80%" }} alt="img" />
                                        </div>
                                        <div>
                                            <p className="head-xx-small oMedium mt-3">
                                                {item[0].name}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="head-xx-small light-gold oMedium">
                                                {item[0].occupation}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="head-xx-small light-gold oMedium">
                                                {item[0].especiality}
                                            </p>
                                        </div>
                                    </Col>
                                    {item.length > 1 ? <Col className="left" sm="12" md="4" lg="4" key={"dr" + i}>
                                        <div>
                                            <img src={item[1].img} style={{ width: "80%" }} alt="img" />
                                        </div>
                                        <div>
                                            <p className="head-xx-small oMedium mt-3">
                                                {item[1].name}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="head-xx-small light-gold oMedium">
                                                {item[1].occupation}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="head-xx-small light-gold oMedium">
                                                {item[1].especiality}
                                            </p>
                                        </div>
                                    </Col>
                                        : <><Col className="left" sm="12" md="4" lg="4" key={"dr" + i}></Col></>
                                    }
                                    {item.length > 2 ? <Col className="left" sm="12" md="4" lg="4" key={"dr" + i}>
                                        <div>
                                            <img src={item[2].img} style={{ width: "80%" }} alt="img" />
                                        </div>
                                        <div>
                                            <p className="head-xx-small oMedium mt-3">
                                                {item[2].name}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="head-xx-small light-gold oMedium">
                                                {item[2].occupation}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="head-xx-small light-gold oMedium">
                                                {item[2].especiality}
                                            </p>
                                        </div>
                                    </Col>
                                        : <><Col className="left" sm="12" md="4" lg="4" key={"dr" + i}></Col></>}
                                </Row>
                            </>
                        ))}

                    </Slider>

                </Col>
            </Row >
        </div >

    )
}

export default CorpoClinico
