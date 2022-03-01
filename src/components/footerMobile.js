import React, { useState } from "react";
import { Link } from "gatsby"
import { Row, Col, Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import '../sass/app.scss';
import Image from './Images'


import $ from 'jquery/dist/jquery.slim' // importing this worked like a charm

const FooterMobile = ({ footer, marcacaoRef }) => {

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
        <div className="position-relative height-100vh max-width center-footer footer-bg">

            <div className="section-space-mobile center pt-4">
                <Link to="/">
                    <Image src={footer.logowhite} className=" mb-4 logo-lg" alt="logo mobile" />
                </Link>

            </div>
            <div>

            </div>
            <Row className="menu-mobile-options center">
              
                {footer.links.map((array, j) => (
                    <Col sm="12" md="12" lg="12" key={"row-footer-mobile-menu-" + j}>
                        {j !== 0 ?
                            < hr className="white" style={{ height: "2px" }} /> : ""
                        }
                        <Row>
                            {array.map((item, k) => (
                                <Col md="12" lg="12" sm="12" key={"col-footer-mobile-menu-text-" + k} >
                                    <Link to={item.link} className="footer-text center oMedium" >
                                        {item.text}
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                    </Col>

                ))
                }
            </Row>
            <div className="footer-text-menu-mobile">
                <Row className="m-auto half-width mb-4">
                    {footer.socialmedia.map((data, i) => (
                        <Col className={renderSwitch(i)} key={"col-footer-mobile-menu-icons-" + i}>
                            <a href={data.link} target="_blank" rel="noreferrer">
                                <Image src={data.icon} alt={data.alt} className="footer-icons-mobile" />
                            </a>
                        </Col>
                    ))}
                </Row>
                {footer.copyrightsmobile.map((paragraph, j) => (
                    <Row className="center" key={"row-footer-mobile-menu-paragraph-" + j}>
                        <Col >
                            <p className="footer-text oMedium">
                                {paragraph}
                            </p>
                        </Col>
                    </Row>
                ))}
            </div>
        </div >
    )
}

export default FooterMobile