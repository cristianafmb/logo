import * as React from "react"

import '../../sass/app.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Testimony = ({ img, alt, quote, tfunction, person, mobile }) => (
    <div style={{ textAlign: "center" }} className="position-relative">
        <div>
            <img src={img} alt={alt} className="user-icon" />
        </div>
        <div className="mt-3">
            <p className={mobile ? "title-large pExtraBold" : "details-large oRegular"}>"{quote}"</p>
        </div>
        <div className={mobile ? "mt-5" :"mt-3"}>
            <p className="head-x-small oMedium">{person}</p>
        </div>
        <div className="mt-2">
            <p className="head-x-small oMedium">{tfunction}</p>
        </div>


    </div>
)

export default Testimony