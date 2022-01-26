import React, { useEffect, useState } from "react";
import { Link } from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';

import '../sass/app.scss';

import { Row, Col } from 'react-bootstrap';

const InnerTopsection = ({ data }) => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
 
    return (
        <div className="pt-5 position-relative">
            <Row className="container-corpo-clinico pt-5">
                <Col sm="12" md="10" lg="10" className="col-80">
                    <p className="head-x-small oBold">{data.head}</p>
                    <p className="title-x-large mt-3 oExtraBold">{data.title}</p>
                </Col>
                <Col sm="12" md="2" lg="2" className="col-20">
                    <p className="head-x-small mb-4 oBold">
                        {data.areas.head}
                    </p>
                    
                    {data.areas.areas.map((item, i) => (
                        
                        <div key={"area"+i}>
                            <hr className="gold" style={{ height: "2px" }} />
                            <Link to={item.link} className="text-decoration-none">
                                 <p className={url.includes(item.link) ? "bold head-small text-decoration-none oMedium" : "head-small text-decoration-none oMedium"}>{item.area}</p>
                            </Link>
                        </div>

                    ))}
                    <hr className="gold" style={{ height: "2px" }} />
                </Col>
            </Row>
        </div>
    )
}

export default InnerTopsection