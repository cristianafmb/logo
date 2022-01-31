import * as React from "react"

import "bootstrap/dist/css/bootstrap.min.css"
import { Row, Col } from 'react-bootstrap';

import '../../sass/app.scss';

const EspecialidadesSobreNos = ({ data }) => {

    var areas = data.especs;
    var areas2 = null

    if (areas.length > 10) {
        areas2 = areas.slice(10, areas.length)
        areas = areas.slice(0,10)
    }

    return (
        <div className="no-repeat position-relative" style={{ backgroundImage: `url(${data.background})` }}>
            <Row className="max-width">
                <Col sm="0" md="4" lg="4">
                </Col>
                <Col sm="12" lg="8" md="8">

                    <Row className="width-90 mt-5 mb-5">
                        <Col sm="12" lg="4" md="4">
                            <img src={data.img} alt="especialidades"/>
                            <p className="head-large mt-5 oLight">{data.title}</p>
                            <p className="details-xx-small mt-5 oRegular">
                                {data.details}
                            </p>

                        </Col>
                        <Col sm="12" lg="4" md="4">

                            {areas.map((array, i) => (
                                <Row key={"first-" + i}>
                                    <Col>
                                        <hr className="gold" style={{ height: "2px" }} />
                                        <a href={array.href}><p className="head-small oLight">{array.title}</p></a>

                                    </Col>
                                </Row>
                            ))}
                            <hr className="gold" style={{ height: "2px" }} />

                        </Col>
                        <Col sm="12" lg="4" md="4">
                            {areas2 !== null ?
                                (<>
                                    {areas2.map((array, i) => (
                                        <Row key={"second-" + i}>
                                            <Col >
                                                <hr className="gold" style={{ height: "2px" }} />
                                                <a href={array.href}><p className="head-small oLight">{array.title}</p></a>

                                            </Col>
                                        </Row>
                                    ))
                                    }
                                    < hr className="gold" style={{ height: "2px" }} />
                                </>)
                                : <></>}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default EspecialidadesSobreNos
