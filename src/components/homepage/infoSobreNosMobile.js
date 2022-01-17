import * as React from "react"
import 'bootstrap-icons/font/bootstrap-icons.css';

import '../../sass/app.scss';
import {Link} from 'gatsby'
import {Row, col, Button} from 'react-bootstrap';

const InfoSobreNos = ({ head, subject, details }) => (
    <div className="position-relative mb-5">
        <div className="mt-5 mb-2 ">
            <p className="head-x-small oBold">{head}</p>
        </div>
        <div>
            <p className="title-large pExtraBold">{subject}</p>
        </div>
        <div  className="mt-4 mb-2">
            <p className="details-small oRegular"> {details} </p>
        </div>
        <div>
            <Link to="/">
                <Button variant="warning" size="sm" className="button-intro-home-saber-mais oMedium">Saber Mais</Button>
            </Link>
        </div>
    </div>
)

export default InfoSobreNos