import * as React from "react"

import 'bootstrap/dist/css/bootstrap.min.css';

import '../../sass/app.scss';


const Invisalgin = ({ title, head, details }) => (
    <div className="position-relative">
        <p className= "oBold head-x-small">{title}</p>

        <p className="oMedium details-large mt-2 mb-3">{head}</p>

        <p className="oRegular details-xx-small">{details}</p>
    </div>
)

export default Invisalgin