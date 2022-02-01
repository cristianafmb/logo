import React from "react";
import { Link } from "gatsby"

import '../../sass/app.scss';
import { Row, Col, Button } from 'react-bootstrap'
import Image from '../Images'


const HighlightNew = ({ head, title, details, path, image, btn }) => {

    return (
        <div className="section-intro-home mt-5 mb-5">
            <Row>
                <Col sm="12" md="4" lg="4" >

                    <div className="position-relative width-90">
                        <div className="mt-5 mb-2 ">
                            <p className="head-x-small oBold">{head}</p>
                        </div>
                        <div>
                            <p className="title-large pExtraBold">{title}</p>
                        </div>
                        <div className="mt-4 mb-2">
                            <p className="details-small oRegular">{details}</p>
                        </div>
                        {btn ? (
                            <div>
                                <Link to={path}>
                                    <Button variant="warning" size="sm" className="button-intro-home-saber-mais oMedium">{btn}</Button>
                                </Link>
                            </div>
                        ) : (
                            <></>
                        )}

                    </div>

                </Col>

                <Col sm="12" md="8" lg="8">
                    {console.log(image)}
                    <Image src={image} alt={title} className="max-width highlight-img" />
                </Col>

            </Row>

        </div>
    )
}
export default HighlightNew