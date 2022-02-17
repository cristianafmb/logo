import * as React from "react"

import "bootstrap/dist/css/bootstrap.min.css"

import Image from '../Images'

import '../../sass/app.scss';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from "gatsby"

import CardNoticiasSection from "../../components/cardHeadTitleDetails"

import Arrow from '../arrow'

const Noticias = ({ posts, xl }) => {
    const firstNew = posts[0]
    const secondNew = posts[1]

    return (
        <div className="container-devices space-sections max-width  position-relative" >
            <Row className="max-width">
                <Col sm="12" md="5" lg="4" >
                    <Link to={firstNew.path}>
                        <Image src={firstNew.image} alt={firstNew.title} className="card-white-img img-noticias" />
                    </Link>

                </Col>
                <Col sm="12" md="7" lg="8">
                    <Row className="height-80">
                        <Col sm="12" md="6" lg="6" className=" p-4">
                            <Link to={firstNew.path}>
                                <CardNoticiasSection head={firstNew.data} title={firstNew.title} details={firstNew.details} />
                            </Link>

                        </Col>
                        {posts.length > 1 ? <Col sm="12" md="6" lg="6" className="p-4">
                            <Link to={secondNew.path}>
                                <CardNoticiasSection title={secondNew.title} head={secondNew.data} details={secondNew.details} />
                            </Link>

                        </Col> : <></>}

                    </Row>

                    <Row>
                        <Col sm="4" md="4" lg="4" className="container-arrow-noticias">
                            <a href={firstNew.path} >
                                <Arrow id="arrow-effect" rot={false} text="ler notícia" blog={false} big={false} />
                            </a>

                        </Col>
                        <Col sm="8" md="8" lg="8">
                            <Row>
                                <Col sm="5" md="5" lg="5" className="no-space-n-cols">
                                    <hr className="gold" />
                                </Col>
                                <Col sm="5" md="5" lg="5" className="no-space-n-cols">
                                    <Link to="/blog">
                                        <Button className="button-noticias-ler-todas oMedium"> <p>Leia todas as nossas notícias</p></Button>
                                    </Link>
                                </Col>
                                <Col sm="2" md="2" lg="2" className="no-space-n-cols">
                                    <hr className="gold" />
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </Col>
            </Row>
        </div>
    )
}


export default Noticias