import * as React from "react"
import '../../gatsby-browser'

import 'bootstrap/dist/css/bootstrap.min.css';

import '../sass/app.scss';

import Button from 'react-bootstrap/Button'

const CardIntroHome = ({head, subject, details}) => (
    <div>
        <p className="head-small">{head}</p>
        <p className="title-medium">{subject}</p>
        <br />
        <p className="details-small">{details}</p>
        <div style={{ marginTop: "30px"}}>
            <Button variant="warning" size="sm" className="button-intro-home-saber-mais">Saber Mais</Button>
        </div>
    </div>
)

export default CardIntroHome