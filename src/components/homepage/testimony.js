import * as React from "react"

import Image from '../Images'

import '../../sass/app.scss';
import "bootstrap/dist/css/bootstrap.min.css"

const Testimony = ({ img, alt, quote, tfunction, person, mobile }) => (
    <div style={{ textAlign: "center" }} className="position-relative">
        <div>
            <Image src={img} alt={alt} className="user-icon m-auto" />
        </div>
        <div className="mt-3">
            <p className={mobile ? "title-large oMedium " : "details-large oRegular"}>"{quote}"</p>
        </div>
        <div className={mobile ? "mt-5" : "mt-3"}>
            <p className="head-x-small oMedium">{person}</p>
        </div>
        <div className="mt-2">
            <p className="head-x-small oMedium">{tfunction}</p>
        </div>


    </div>
)

export default Testimony