import * as React from "react";

import "bootstrap/dist/css/bootstrap.min.css"

import '../../sass/app.scss';
import Image from '../Images'
import { Row, Col } from 'react-bootstrap';


const MiniCorpoClinico = ({ corpoclinico, mobile }) => {
    return (
        <Row className="position-relative">
            <p className="head-x-small oBold mb-4">Corpo Clínico</p>
            {mobile ? (
                <div className="grid-container center">
                    {corpoclinico.map((item, i) => (
                        <div key={"mini-" + i}>
                            <div className="user-icon icon-clinico m-auto">
                                <Image src={item.img} alt={item.alt} />
                            </div>
                            <div className="center">
                                <p className="head-xx-small  oMedium mt-3">{item.name}</p>
                            </div>
                            <div className="center">
                                <p className="head-xx-small light-gold oMedium mb-4">{item.occupation}</p>
                            </div>
                        </div>

                    ))}
                </div>
            )
                :
                corpoclinico.map((item, i) => (
                    <Col key={"mini-" + i} className="mt-3">
                        <div className="user-icon icon-clinico ">
                            <Image src={item.img} alt={item.alt} />
                        </div>
                        <div className="left">
                            <p className="head-xx-small  oMedium mt-3">{item.name}</p>
                        </div>
                        <div className="left">
                            <p className="head-xx-small light-gold oMedium">{item.occupation}</p>
                        </div>
                    </Col>

                ))
            }
        </Row>
    )
}

export default MiniCorpoClinico
