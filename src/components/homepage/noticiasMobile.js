import * as React from "react"

import "bootstrap/dist/css/bootstrap.min.css"
import Image from '../Images'

import '../../sass/app.scss';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from "gatsby"

import Card from "../cardHeadTitleDetails"

import Arrow from '../arrow'

const NoticiasMobile = ({ posts, blogIntro }) => {

    const firstNew = posts[0]

    return (
        <div className="margin-sections section-space-mobile  position-relative margin-bottom-svg" >
            <Row className="max-width">
                <Col sm="12" md="6" lg="6" className="p-4 mb-4">
                    <Card head={blogIntro.title} title={blogIntro.head} details={blogIntro.details} btn={blogIntro.btntxtmobile} btnlink={blogIntro.btnhref} />
                </Col>
                <Col sm="12" md="4" lg="4" >
                    <Link to={firstNew.path}>
                        <Image src={firstNew.image} alt={firstNew.title} className="card-white-img img-noticias" />
                    </Link>
                </Col>
                <Col sm="12" md="6" lg="6" className=" mt-5">
                    <Link to={firstNew.path}>
                        <Card head={firstNew.head} title={firstNew.title} details={firstNew.details} btn={false} btnlink={false} />
                    </Link>
                </Col>
                <Col sm="12" md="8" lg="8" className="mt-2">
                    <Link to={firstNew.path} className="calCell bottom-0 text-decoration-none">
                        <Arrow id="arrow-effect-big" rot={false} text="ler notícia" big={true} />
                    </Link>
                </Col>
            </Row>
        </div>
    )
}



export default NoticiasMobile