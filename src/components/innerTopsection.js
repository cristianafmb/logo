import React, { useEffect, useState } from "react";
import { Link } from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';

import '../sass/app.scss';

import { Row, Col } from 'react-bootstrap';

const InnerTopsection = ({ areas, page, location }) => {
    var pathname = location.pathname;

    return (
        <div className="pt-5 position-relative">
            <Row className="container-corpo-clinico pt-5">
                <Col sm="12" md="10" lg="10" className="col-80">
                    <p className="head-x-small oBold">{page.head}</p>
                    <p className="title-x-large mt-3 oExtraBold">{page.title}</p>
                </Col>
                <Col sm="12" md="2" lg="2" className="col-20">
                    <p className="head-x-small mb-4 oBold">
                        {areas.head}
                    </p>

                    {areas.areas.map((item, i) => (

                        <div key={"area" + i}>
                            <hr className="gold" style={{ height: "2px" }} />
                            <Link to={item.href} className="text-decoration-none">
                                <p className={pathname.includes(item.href) ? "bold head-small text-decoration-none oMedium" : "head-small text-decoration-none oMedium"}>{item.title}</p>
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