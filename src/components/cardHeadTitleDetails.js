import * as React from "react"
import '../sass/app.scss';
import { Link } from 'gatsby'
import "bootstrap/dist/css/bootstrap.min.css"
import Button from 'react-bootstrap/Button';

const CardHeadTitleDetails = ({ head, title, details, btn, btnlink, maxwidth }) => (
    <div className="position-relative mb-5">

        <p className="head-x-small oBold">{head}</p>
        <p className="title-large oMedium mt-3">{title}</p>
        <p className="details-small oRegular mt-4 mb-3">{details}</p>
        
        {btn ? (
            <>
                {maxwidth !== null && maxwidth !== false ? 
                ( <div style={{maxWidth: maxwidth+"%"}}>
                    <a href={btnlink === "/marcacao" ? "#marcacao" : btnlink}>
                        <Button variant="warning" size="sm" className="btn-gold btn-big oMedium">{btn}</Button>
                    </a>
                </div>)
                :
                
                <div>
                    <a href={btnlink === "/marcacao" ? "#marcacao" : btnlink}>
                        <Button variant="warning" size="sm" className="btn-gold btn-big oMedium">{btn}</Button>
                    </a>
                </div>}
            </>
        ) : (
            <></>
        )}

    </div>

)

export default CardHeadTitleDetails
