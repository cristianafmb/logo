import * as React from "react"

import "bootstrap/dist/css/bootstrap.min.css"
import Button from 'react-bootstrap/Button'

import '../../sass/app.scss';

const CardIntroHome = ({ head, subject, details, btntext, href }) => (
    <div className="position-relative width-90 pt-5 mt-5">
        
        <div className=" mb-2 ">
            <p className="head-x-small oBold">{head}</p>
        </div>
        <div>
            <p className="title-large oExtraBold">{subject}</p>
        </div>
        <div className="mt-4 mb-2 min-height-7vh" >
            <p className="details-small oRegular">{details}</p>
        </div>
        <div>
            <a href={href === "/marcacao" ? "#marcacao" : href}>
                 <Button variant="warning" size="sm" className="button-intro-home-saber-mais oMedium">{btntext}</Button>
            </a>
        </div>
    </div>
)

export default CardIntroHome