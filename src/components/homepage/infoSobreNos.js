import * as React from "react"
import 'bootstrap-icons/font/bootstrap-icons.css';

import '../../sass/app.scss';


const InfoSobreNos = ({ head, subject, details }) => (
    <div className="position-relative">
        <div>
            <p className="head-x-small oBold">{head}</p>
        </div>
        <div  className="mb-3">
            <p className="title-x-large oExtraBold">{subject}</p>
        </div>
        <div  className="mb-4">
            <p className="details-small oRegular"> {details} </p>
        </div>
    </div>
)

export default InfoSobreNos