import React, { useState, useEffect } from "react"
import '../../sass/app.scss';
import { Link } from "gatsby"

import "bootstrap/dist/css/bootstrap.min.css"

import { Row, Col, Button } from 'react-bootstrap'

import CardCorpoClinico from './cardCorpoClinico'

const CorpoClinico = ({ data }) => {
    const number_per_cols = Math.floor(data.people.length / 3);

    const first_col = data.people.slice(0, number_per_cols)
    const second_col = data.people.slice(number_per_cols, number_per_cols * 2)
    const third_col = data.people.slice(number_per_cols * 2, data.people.length)

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    useEffect(() => {
        const timerId1 = setInterval(() => {
            setCount1((count1) => count1 + 1);
        }, 10000);
        const timerId2 = setInterval(() => {
            setCount2((count2) => count2 + 1);
        }, 14000);
        const timerId3 = setInterval(() => {
            setCount3((count3) => count3 + 1);
        }, 12000);

        return () => clearInterval(timerId1, timerId2, timerId3);
    }, []);

    const first_col_image = first_col[count1 % number_per_cols];
    
    const second_col_image = second_col[count2 % number_per_cols];

    const third_col_image = third_col[count3 % number_per_cols];

    
    
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
                        <Col className="left" sm="12" md="4" lg="4" >
                            <CardCorpoClinico img={first_col_image.img} name={first_col_image.name} occupation={first_col_image.occupation} especiality={first_col_image.especiality} classname="fade-first"/>
                        </Col>
                        <Col className="left" sm="12" md="4" lg="4" >
                            <CardCorpoClinico img={second_col_image.img} name={second_col_image.name} occupation={second_col_image.occupation} especiality={second_col_image.especiality} classname="fade-second"/>
                        </Col>
                        <Col className="left" sm="12" md="4" lg="4" >
                            <CardCorpoClinico img={third_col_image.img} name={third_col_image.name} occupation={third_col_image.occupation} especiality={third_col_image.especiality} classname="fade-third"/>
                        </Col>
                    </Row>
                </Col>
            </Row >
        </div >

    )
}

export default CorpoClinico
