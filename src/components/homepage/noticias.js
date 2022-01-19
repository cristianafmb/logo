import * as React from "react"

import 'bootstrap/dist/css/bootstrap.min.css';

import '../../sass/app.scss';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from "gatsby"

import CardNoticiasSection from "../../components/homepage/cardNoticiasSection"

const Noticias = ({ noticias, blog }) => (
    <div className="space-sections max-width  position-relative" >
        <Row className="max-width">
            <Col sm="12" md="4" lg="4" >
                <img className="card-white-img img-noticias" src={noticias.img} alt={noticias.alt} />
            </Col>
            <Col sm="12" md="8" lg="8">
                <Row className="height-80">
                    <Col sm="12" md="6" lg="6" className=" p-4">
                        <CardNoticiasSection title={noticias.date} head={noticias.title} details={noticias.synopsis} />
                    </Col>
                    <Col sm="12" md="6" lg="6" className="p-4">
                        <CardNoticiasSection head={blog.head} title={blog.title} details={blog.details} />
                    </Col>
                </Row>
                <Row>
                    <Col sm="3" md="3" lg="3">
                        <Link to="/sobrenos" className="calCell bottom-0 text-decoration-none">
                            <svg className="svg">
                                <defs>
                                    <marker id="m" markerWidth="4" markerHeight="8"
                                        refX="0" refY="1" viewBox="0 0 1 2">
                                        <polygon points="0,0 1,1 0,2" fill="#8c6f2a" />
                                    </marker>
                                </defs>
                                <line x1="0" y1="50%" x2="90%" y2="50%"
                                    strokeWidth="1" markerEnd="url(#m)" stroke="#8c6f2a" />
                            </svg>
                            <p className="hover-to-show oOblique">ler notícia</p>

                        </Link>
                    </Col>
                    <Col sm="9" md="9" lg="9">
                        <Row>
                            <Col sm="5" md="5" lg="5" className="no-space-n-cols">
                                <hr className="gold"/>
                            </Col>
                            <Col sm="5" md="5" lg="5" className="no-space-n-cols">
                                <Button className="button-noticias-ler-todas oMedium"> <p>Leia todas as nossas notícias</p></Button>
                            </Col>
                            <Col sm="2" md="2" lg="2" className="no-space-n-cols">
                                <hr className="gold"/>
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </Col>
        </Row>
    </div>
)



export default Noticias