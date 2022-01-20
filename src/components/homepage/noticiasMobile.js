import * as React from "react"

import 'bootstrap/dist/css/bootstrap.min.css';

import '../../sass/app.scss';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from "gatsby"

import Card from "../cardHeadTitleDetails"

const Noticias = ({ noticias, blog }) => (
    <div className="space-sections section-space-mobile  position-relative" >
        <Row className="max-width">
            <Col sm="12" md="6" lg="6" className="p-4 mb-4">
                <Card head={blog.title} title={blog.head} details={blog.details} btn={blog.btntxtmobile} btnlink={blog.btnhref} />
            </Col>
            <Col sm="12" md="4" lg="4" >
                <img className="card-white-img img-noticias" src={noticias.img} alt={noticias.alt} />
            </Col>
            <Col sm="12" md="6" lg="6" className=" mt-4">
                <Card head={noticias.date} title={noticias.title} details={noticias.synopsis} btn={false} btnlink={false} />
            </Col>
            <Col sm="12" md="8" lg="8" className="mt-2">
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
                    <p className="hover-to-show details-small oOblique">ler notícia</p>

                </Link>
            </Col>
        </Row>
    </div>
)



export default Noticias