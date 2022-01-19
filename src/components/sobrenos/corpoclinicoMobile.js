import * as React from "react"
import '../../sass/app.scss';
import { Link } from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';

import { Row, Col, Button } from 'react-bootstrap';
import Card from "../cardHeadTitleDetails"

const CorpoClinico = ({ data }) => (
    <div className="margin-sections position-relative">
        <div className="section-space-mobile">
            <Card head={data.head} title={data.title} details={data.details} btn={data.btn.textmobile} btnlink={data.btn.link} />
        </div>
        <Row className="container-corpo-clinico">
            <Col className="grid-container" style={{ marginLeft: "5px" }}>
                {data.people.map((data, i) => (
                    <div className="left">
                        <div>
                            <img src={data.img} style={{ width: "90%" }} />
                        </div>
                        <div>
                            <p className="head-xx-small oMedium mt-3">
                                {data.name}
                            </p>
                        </div>
                        <div>
                            <p className="head-xx-small light-gold oMedium">
                                {data.occupation}
                            </p>
                        </div>
                        <div>
                            <p className="head-xx-small light-gold oMedium mb-3">
                                {data.especiality}
                            </p>
                        </div>
                    </div>
                ))}
            </Col>
        </Row>
    </div >

)

export default CorpoClinico