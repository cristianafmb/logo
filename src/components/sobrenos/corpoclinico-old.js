import * as React from "react"
import '../../sass/app.scss';
import { Link } from "gatsby"


import Image from '../Images'

import "bootstrap/dist/css/bootstrap.min.css"

import { Row, Col, Button } from 'react-bootstrap'

const CorpoClinico = ({ data }) => (
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
            <Col sm="12" md="7" lg="7" style={{marginLeft: "5px"}}>
                <Row>
                    {data.people.map((data, i) => (
                        <Col className="left" sm="12" md="4" lg="4" key={"dr"+i}>
                            <div>
                                <Image src={data.img} style={{ width: "80%" }} alt="img"/>
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
                                <p className="head-xx-small light-gold oMedium">
                                    {data.especiality}
                                </p>
                            </div>

                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
    </div>

)

export default CorpoClinico
