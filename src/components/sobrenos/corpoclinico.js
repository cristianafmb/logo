import React, { useState, useEffect } from "react"
import '../../sass/app.scss';
import { Link } from "gatsby"

import "bootstrap/dist/css/bootstrap.min.css"

import $ from 'jquery/dist/jquery.slim' // importing this worked like a charm
import { Row, Col, Button } from 'react-bootstrap'

import { CSSTransition, SwitchTransition } from "react-transition-group";
import CardCorpoClinico from './cardCorpoClinico'

const CorpoClinico = ({ data }) => {
    const number_per_cols = Math.floor(data.people.length / 3);

    const first_col = data.people.slice(0, 3)
    const second_col = data.people.slice(number_per_cols, number_per_cols * 2)
    const third_col = data.people.slice(number_per_cols * 2, data.people.length)

    const images = first_col

    const [slide, setSlide] = useState(0);

    const imageElements = images.map((item, i) => {
        return (
            <>
                <img src={item.img} key={i} alt={`slideshow ${i + 1}`} className="img-corpo-clinico" />
                <div className="d-flex max-width">
                    <p className="head-xx-small oMedium mt-3 d-flex" >
                        {item.name}
                    </p>
                </div>
                <p className="head-xx-small light-gold oMedium " >
                    {item.occupation}
                </p>
                <p className="head-xx-small light-gold oMedium  ">
                    {item.especiality}
                </p>
            </>);
    });

    useEffect(() => {
        const slideshowTimer = setInterval(() => {
            slide + 1 > images.length - 1 ? setSlide(0) : setSlide(slide + 1);
        }, 3000);

        return () => clearInterval(slideshowTimer);
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

                    <SwitchTransition>
                        <CSSTransition key={slide} timeout={500} classNames="fade" appear>
                            <div className="container-image-corpo-clinico">
                                {imageElements[slide]}
                            </div>
                        </CSSTransition>
                    </SwitchTransition>

                </Col>
            </Row >
        </div >

    )
}

export default CorpoClinico
