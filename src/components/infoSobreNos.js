import * as React from "react"
import '../../gatsby-browser'

import '../sass/app.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

const InfoSobreNos = ({ head, subject, details }) => (
    <div>
        <p className="head-small">{head}</p>
        <p className="title-big home-sobre-nos-subject">{subject}</p>
        <p className="details-small"> {details} </p>
    </div>
)

export default InfoSobreNos