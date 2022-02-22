import * as React from "react";
import { Link } from "gatsby"

import "bootstrap/dist/css/bootstrap.min.css"

import '../../sass/app.scss';
import MiniCorpoClinico from './miniCorpoClinico'
import PedidoMarcacao from '../pedidoMarcacaoRapido'
import { Row, Col } from 'react-bootstrap';


const Subpage = ({ subpage, page, areas, location, marcacaoRef }) => {
    var pathname = location.pathname;

    return (
        <div className="pt-5 position-relative">
            <Row className="container-corpo-clinico pt-5">
                <Col sm="12" md="10" lg="10" className="col-80">
                    <Row >
                        <Col sm="12" md="6" lg="6">
                            <div className="d-flex">
                                <a href={subpage.headhref} className="text-decoration-none"> <p className="head-x-small oBold">{subpage.head}   </p></a>
                                <p className="head-x-small oBold"> &nbsp;&nbsp; &#62; &nbsp;&nbsp;</p>
                                <a href={subpage.href} className="text-decoration-none">
                                    <p className="head-x-small oBold">
                                        {subpage.title}
                                    </p>
                                </a>
                            </div>


                            <p className="title-large mt-4 mb-3 gold oExtraBold">{subpage.title}</p>
                            {subpage.detailsbig.map((detail, i) => (
                                <div key={"div"+i}>
                                    <p className="details-small oRegular">{detail}</p>
                                    <br />
                                </div>

                            ))}

                        </Col>
                        <Col sm="12" md="1" lg="1">
                        </Col>
                        <Col sm="12" md="5" lg="5">
                            <MiniCorpoClinico corpoclinico={subpage.corpoclinico} mobile={false} />
                        </Col>
                    </Row>
                    <Row className="pt-5">
                        <Col sm="8" md="8" lg="8">
                            <PedidoMarcacao img={false} alt={false} space={false} subpage={subpage} marcacaoRef={marcacaoRef} />
                        </Col>
                    </Row>
                </Col>
                <Col sm="12" md="2" lg="2" className="col-20">
                    <p className="head-x-small mb-4 oBold">
                        {subpage.head}
                    </p>

                    {areas.map((item, i) => (

                        <div key={"subpage-area" + i}>
                            <hr className="gold" style={{ height: "2px", margin: "0" }} />
                            <Link to={item.href} className="text-decoration-none">
                                <p className={pathname.includes(item.href) ? "bold head-small text-decoration-none oLight line-height-2 mt-1 mb-1" : "head-small text-decoration-none oLight line-height-2 mt-1 mb-1"}>{item.title}</p>
                            </Link>
                        </div>

                    ))}
                    <hr className="gold" style={{ height: "2px", margin: "0" }} />
                </Col>
            </Row>

        </div>
    )
}

export default Subpage
