import * as React from "react"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import '../sass/app.scss';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from './Images'


const Footer = ({ data, xl }) => {

    function renderSwitch(param) {
        switch (param) {
            case 0:
                return 'right';
            case 1:
                return 'center';
            case 2:
                return 'left';
            default:
                return 'center';
        }
    }



    return (
        <div className="position-relative footer-bg">
            <Row className="container-xl-devices  center heigth-footer d-flex  align-items-center m-auto width-footer">
                <Col sm="12" md="1" lg="1" className="right ">
                    <Link to="/">
                        <Image src={data.logowhite} className="logo-footer" alt="logo" />
                    </Link>
                </Col>
                <Col sm="12" md="2" lg="2">
                    <Row className="m-auto half-width">
                        {data.socialmedia.map((data, i) => (
                            <Col className={renderSwitch(i)} sm="12" md="4" lg="4" key={"col-footer-icons-" + i}>
                                <a href={data.link} target="_blank" rel="noreferrer">
                                    <Image src={data.icon} alt={data.alt} className="footer-icons" />
                                </a>
                            </Col>
                        ))}
                    </Row>
                </Col>
                {data.links.map((array, j) => (
                    <Col sm="12" md="2" lg="2" key={"row-footer-text-" + j}>
                        <Row>
                            {array.map((item, k) => (
                                <Col md="12" lg="12" sm="12" key={"col-footer-text-" + k}>
                                    <Link to={item.link} className="footer-text left oMedium" target="_blank">
                                        {item.text}
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                    </Col>

                ))}

                <Col sm="12" md="3" lg="3" className="footer-text-bottom right mb-4">
                    {data.copyrightsmobile.map((paragraph, j) => (
                        <Row className="right" key={"row-footer-menu-paragraph-" + j}>
                            <Col >
                                <p className="footer-text footer-text-bottom right oMedium">
                                    {paragraph}
                                </p>
                            </Col>
                        </Row>
                    ))}
                </Col>
            </Row >
        </div >
    )
}

export default Footer