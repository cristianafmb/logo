import React, { useEffect, useState } from "react";
import { Link } from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';

import '../../sass/app.scss';
import MiniCorpoClinico from './miniCorpoClinico'
import PedidoMarcacao from '../pedidoMarcacaoRapido'
import { Row, Col } from 'react-bootstrap';


const Subpage = ({ subpage, page, areas, location }) => {
    var pathname = location.pathname;
    
    return (
        <div className="pt-5 position-relative">
            <Row className="container-corpo-clinico pt-5">
                <Col sm="12" md="10" lg="10" className="col-80">
                    <Row className="mb-5 pb-5">
                        <Col sm="12" md="5" lg="5">
                            <div className="d-flex">
                                <p className="head-x-small oBold">
                                    <a href={subpage.headhref} className="text-decoration-none">{subpage.head}</a> </p>
                                <p className="head-x-small oBold"> &nbsp;&nbsp; &#62; &nbsp;&nbsp;</p>
                                <p className="head-x-small oBold">
                                    <a href={subpage.link} className="text-decoration-none">{subpage.title}</a>
                                </p>
                            </div>


                            <p className="title-x-large mt-3 mb-3 gold oExtraBold">{subpage.title}</p>
                            <p className="details-xx-small mt-4 pe-5 oRegular">{subpage.details}</p>
                        </Col>
                        <Col sm="12" md="1" lg="1">
                        </Col>
                        <Col sm="12" md="6" lg="6">
                            <MiniCorpoClinico corpoclinico={subpage.corpoclinico} mobile={false}/>
                        </Col>
                    </Row>
                    <Row className="mt-5 pt-5">
                        <Col sm="8" md="8" lg="8">
                            <PedidoMarcacao img={false}  alt={false} space={false} subpage={subpage}/>
                        </Col>
                    </Row>
                </Col>
                <Col sm="12" md="2" lg="2" className="col-20">
                    <p className="head-x-small mb-4 oBold">
                        {subpage.head}
                    </p>

                    {areas.map((item, i) => (

                        <div key={"area" + i}>
                            <hr className="gold" style={{ height: "2px" }} />
                            <Link to={"/" + page + item.link} className="text-decoration-none">
                                <p className={pathname.includes(item.link) ? "bold head-small text-decoration-none oLight" : "head-small text-decoration-none oLight"}>{item.title}</p>
                            </Link>
                        </div>

                    ))}
                    <hr className="gold" style={{ height: "2px" }} />
                </Col>
            </Row>

        </div>
    )
}

export default Subpage
