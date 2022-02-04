import React, { useState, useEffect } from "react"
import '../../sass/app.scss';
import { Link } from "gatsby"

import "bootstrap/dist/css/bootstrap.min.css"

import $ from 'jquery/dist/jquery.slim' // importing this worked like a charm
import { Row, Col, Button } from 'react-bootstrap'

import { CSSTransition, SwitchTransition, TransitionGroup } from "react-transition-group";
import CardCorpoClinico from './cardCorpoClinico'

const CorpoClinico = ({ data }) => {
    const number_per_cols = Math.floor(data.people.length / 3);

    const first_col = data.people.slice(0, number_per_cols)
    const second_col = data.people.slice(number_per_cols, number_per_cols * 2)
    const third_col = data.people.slice(number_per_cols * 2, data.people.length)

    const imagesFirst = first_col
    const imagesSecond = second_col
    const imagesThird = third_col

    const [slideFirst, setSlideFirst] = useState(0);
    const [slideSecond, setSlideSecond] = useState(0);
    const [slideThird, setSlideThird] = useState(0);

    const imageElementsFirst = imagesFirst.map((item1, i1) => {
        return (
            <>
                <img src={item1.img} key={i1} alt={`slideshow ${i1 + 1}`} className="img-corpo-clinico" />
                <div className="d-flex max-width">
                    <p className="head-xx-small oMedium mt-3 d-flex" >
                        {item1.name}
                    </p>
                </div>
                <p className="head-xx-small light-gold oMedium " >
                    {item1.occupation}
                </p>
                <p className="head-xx-small light-gold oMedium  ">
                    {item1.especiality}
                </p>
            </>);
    });

    const imageElementsSecond = imagesSecond.map((item2, i2) => {
        return (
            <>
                <img src={item2.img} key={i2} alt={`slideshow ${i2 + 1}`} className="img-corpo-clinico" />
                <div className="d-flex max-width">
                    <p className="head-xx-small oMedium mt-3 d-flex" >
                        {item2.name}
                    </p>
                </div>
                <p className="head-xx-small light-gold oMedium " >
                    {item2.occupation}
                </p>
                <p className="head-xx-small light-gold oMedium  ">
                    {item2.especiality}
                </p>
            </>);
    });

    const imageElementsThird = imagesThird.map((item3, i3) => {
        return (
            <>
                <img src={item3.img} key={i3} alt={`slideshow ${i3 + 1}`} className="img-corpo-clinico" />
                <div className="d-flex max-width">
                    <p className="head-xx-small oMedium mt-3 d-flex" >
                        {item3.name}
                    </p>
                </div>
                <p className="head-xx-small light-gold oMedium " >
                    {item3.occupation}
                </p>
                <p className="head-xx-small light-gold oMedium  ">
                    {item3.especiality}
                </p>
            </>);
    });

    useEffect(() => {
        const slideshowTimerFirst = setInterval(() => {
            slideFirst + 1 > imagesFirst.length - 1 ? setSlideFirst(0) : setSlideFirst(slideFirst + 1);
        }, 12000);
        const slideshowTimerSecond = setInterval(() => {
            slideSecond + 1 > imagesSecond.length - 1 ? setSlideSecond(0) : setSlideSecond(slideSecond + 1);
        }, 16000);
        const slideshowTimerThird = setInterval(() => {
            slideThird + 1 > imagesThird.length - 1 ? setSlideThird(0) : setSlideThird(slideThird + 1);
        }, 14000);

        return () => clearInterval(slideshowTimerFirst, slideshowTimerSecond, slideshowTimerThird);
    });


    return (
        <div className="margin-sections position-relative">
            <Row className="container-corpo-clinico">
                <Col sm="12" md="4" lg="4" className="m-auto">
                    <p className="head-x-small oBold">{data.head}</p>
                    <p className="title-large oExtraBold mt-3 mb-5">{data.title}</p>
                    <p className="details-small mt-2 oRegular">{data.details}</p>
                    <Link to={data.btn.link}>
                        <Button variant="warning" size="sm" className="button-intro-home-saber-mais btn-big oMedium">{data.btn.text}</Button>
                    </Link>
                </Col>
                <Col sm="12" md="7" lg="7" style={{ marginLeft: "5px" }}>
                    <Row>
                        <Col sm="12" md="4" lg="4" >
                            <SwitchTransition>
                                <CSSTransition key={slideFirst} timeout={500} classNames="fade" appear>
                                    <div className="container-image-corpo-clinico">
                                        {imageElementsFirst[slideFirst]}
                                    </div>
                                </CSSTransition>
                            </SwitchTransition>
                        </Col>
                        <Col sm="12" md="4" lg="4" >
                            <SwitchTransition>
                                <CSSTransition key={slideSecond} timeout={500} classNames="fade" appear>
                                    <div className="container-image-corpo-clinico">
                                        {imageElementsSecond[slideSecond]}
                                    </div>
                                </CSSTransition>
                            </SwitchTransition>
                        </Col>
                        <Col sm="12" md="4" lg="4" >
                            <SwitchTransition>
                                <CSSTransition key={slideThird} timeout={500} classNames="fade" appear>
                                    <div className="container-image-corpo-clinico">
                                        {imageElementsThird[slideThird]}
                                    </div>
                                </CSSTransition>
                            </SwitchTransition>
                        </Col>
                    </Row>
                </Col>
            </Row >
        </div >

    )
}

export default CorpoClinico
