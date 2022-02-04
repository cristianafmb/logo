import React, { useState, useEffect } from "react"
import '../../sass/app.scss';
import { Link } from "gatsby"
import { render } from 'react-dom'
import "bootstrap/dist/css/bootstrap.min.css"

import $ from 'jquery/dist/jquery.slim' // importing this worked like a charm
import { Row, Col, Button, Alert, Container } from 'react-bootstrap'
import { Spring, useTransition, animated } from 'react-spring'
import CardCorpoClinico from './cardCorpoClinico'
import { CSSTransition } from 'react-transition-group';



const CorpoClinico = ({ data }) => {
    const number_per_cols = Math.floor(data.people.length / 3);

    const first_col = data.people.slice(0, number_per_cols)

    const second_col = data.people.slice(number_per_cols, number_per_cols * 2)
    const third_col = data.people.slice(number_per_cols * 2, data.people.length)

    var body = $('#teste');
    var backgrounds = [`url(${first_col[0].img})`, `url(${first_col[1].img})`, `url(${first_col[2].img})`];
    var current = 0;

    function nextBackground() {
        body.css(
            'background',
            backgrounds[current = ++current % backgrounds.length]
        );

        setTimeout(nextBackground, 5000);
    }
    setTimeout(nextBackground, 5000);
    body.css('background', backgrounds[0]);


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
                        <Col sm="12" lg="4" md="4">
                            <div id="teste" />
                        </Col>
                    </Row>


                </Col>
            </Row >
        </div >

    )
}

export default CorpoClinico
