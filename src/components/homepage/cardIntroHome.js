import * as React from "react"
import { Link } from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'

import '../../sass/app.scss';

const CardIntroHome = ({ head, subject, details }) => (
    <div className="position-relative width-90">
        <div className="mt-5 mb-2 ">
            <p className="head-x-small oBold">{head}</p>
        </div>
        <div>
            <p className="title-large pExtraBold">{subject}</p>
        </div>
        <div className="mt-4 mb-2">
            <p className="details-small oRegular">{details}</p>
        </div>
        <div>
            <Link to="/">
                <Button variant="warning" size="sm" className="button-intro-home-saber-mais oMedium">Saber Mais</Button>
            </Link>
        </div>
    </div>
)

export default CardIntroHome