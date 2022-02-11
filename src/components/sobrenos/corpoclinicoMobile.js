import React, { useEffect } from "react";
import '../../sass/app.scss'

import "bootstrap/dist/css/bootstrap.min.css"
import Image from '../Images'

import { Row, Col } from 'react-bootstrap';
import Card from "../cardHeadTitleDetails"
import $ from 'jquery' // important: case sensitive.


const CorpoClinicoMobile = ({ data, first_col, second_col, third_col, fourth_col }) => {

    


    return (
        <div className="margin-sections position-relative">

            <div className="section-space-mobile">
                <Card head={data.head} title={data.title} details={data.details} btn={data.btn.textmobile} btnlink={data.btn.link} />
            </div>

            <Row className="container-corpo-clinico grid-container-two-rows min-height-25vh">
                <Col sm="6" md="6" lg="6" className="position-relative">
                    {first_col.map((item, i) => (
                        <div className="position-absolute" key={"corpo-mobile-first" + i}>
                            <img className="img-corpo-clinico" src={item.img} id={"first" + i} />
                            <div className=" max-width">
                                <p className="head-xx-small oMedium mt-3 p-corpo-clinico" id={"nameFirst" + i} > {item.name} </p>
                            </div>
                            <div className=" max-width">
                                <p className="head-xx-small light-gold oMedium p-corpo-clinico" id={"occupationFirst" + i}> {item.occupation}</p>
                            </div>
                            <div className=" max-width">
                                <p className="head-xx-small light-gold oMedium  p-corpo-clinico" id={"especialityFirst" + i}> {item.especiality}</p>
                            </div>
                        </div>
                    ))}
                </Col>
                <Col sm="6" md="6" lg="6" className="position-relative">
                    {second_col.map((item, i) => (
                        <div className="position-absolute" key={"corpo-mobile-second" + i}>
                            <img className="img-corpo-clinico" src={item.img} id={"second" + i} />
                            <div className=" max-width">
                                <p className="head-xx-small oMedium mt-3 p-corpo-clinico" id={"nameSecond" + i} > {item.name} </p>
                            </div>
                            <div className=" max-width">
                                <p className="head-xx-small light-gold oMedium p-corpo-clinico" id={"occupationSecond" + i}> {item.occupation}</p>
                            </div>
                            <div className=" max-width">
                                <p className="head-xx-small light-gold oMedium  p-corpo-clinico" id={"especialitySecond" + i}> {item.especiality}</p>
                            </div>
                        </div>
                    ))}
                </Col>
            </Row>

            <Row className="container-corpo-clinico grid-container-two-rows min-height-25vh">
                <Col sm="6" md="6" lg="6" className="position-relative ">
                    {third_col.map((item, i) => (
                        <div className="position-absolute" key={"corpo-mobile-third" + i}>
                            <img className="img-corpo-clinico" src={item.img} id={"third" + i} />
                            <div className=" max-width">
                                <p className="head-xx-small oMedium mt-3 p-corpo-clinico" id={"nameThird" + i} > {item.name} </p>
                            </div>
                            <div className=" max-width">
                                <p className="head-xx-small light-gold oMedium p-corpo-clinico" id={"occupationThird" + i}> {item.occupation}</p>
                            </div>
                            <div className=" max-width">
                                <p className="head-xx-small light-gold oMedium  p-corpo-clinico" id={"especialityThird" + i}> {item.especiality}</p>
                            </div>
                        </div>
                    ))}
                </Col>
                <Col sm="6" md="6" lg="6" className="position-relative">
                    {fourth_col.map((item, m) => (
                        <div className="position-absolute" key={"corpo-mobile-fourth" + m}>
                            <img className="img-corpo-clinico" src={item.img} id={"fourth" + m} />
                            <div className=" max-width">
                                <p className="head-xx-small oMedium mt-3 p-corpo-clinico" id={"nameFourth" + m} > {item.name} </p>
                            </div>
                            <div className=" max-width">
                                <p className="head-xx-small light-gold oMedium p-corpo-clinico" id={"occupationFourth" + m}> {item.occupation}</p>
                            </div>
                            <div className=" max-width">
                                <p className="head-xx-small light-gold oMedium  p-corpo-clinico" id={"especialityFourth" + m}> {item.especiality}</p>
                            </div>
                        </div>
                    ))}
                </Col>
            </Row>

        </div >

    )
}

export default CorpoClinicoMobile
