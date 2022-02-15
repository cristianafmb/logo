import * as React from "react"
import '../../sass/app.scss';

import "bootstrap/dist/css/bootstrap.min.css"

const SobreNos = ({ data, xl }) => (
    <div className={xl ? "container-xl-devices position-relative" : "position-relative"}>
        <div className="margin-5">

        </div>
        <div className="m-auto half-width">
            <p className="head-x-small oBold">{data.head}</p>
            <p className="title-x-large oExtraBold mt-4 mb-3">{data.title}</p>
            <p className="details-small  mt-5 oRegular">{data.details}</p>
        </div>
        <div className="margin-5">

        </div>
    </div>

)

export default SobreNos
