import * as React from "react"

import "bootstrap/dist/css/bootstrap.min.css"
import Carousel from 'react-bootstrap/Carousel'

import Image from '../Images'
import '../../sass/app.scss';
import Card from '../cardHeadTitleDetails'

const IntroHomeMobile = ({ data }) => {
    return (
        <div className="section-space-mobile margin-sections" >

            <Carousel indicators={false} pause={true} nextIcon={false} prevIcon={false} fade={true}>
                {data.home.map((data, i) => (
                    <Carousel.Item key={"card-intro-home" + i}>
                        <Image src={data.img} alt={data.alt} className="banner-intro-home max-width mb-5" />
                        <Card head={data.head} subject={data.subject} details={data.details} btn={data.btntext} btnlink={data.href} mt={true} />
                    </Carousel.Item  >
                ))}
            </Carousel>
        </div>
    )
}

export default IntroHomeMobile
