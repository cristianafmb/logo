import * as React from "react"
import '../sass/app.scss';
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const SobreNos = ({ head, title, details, btn, btnlink }) => (
    <div className="position-relative mb-5">

        <p className="head-x-small oBold">{head}</p>
        <p className="title-large oMedium mt-3">{title}</p>
        <p className="details-small oRegular mt-4 mb-3">{details}</p>

        {btn ? (
            <div>
                <Link to={btnlink}>
                    <Button variant="warning" size="sm" className="btn-gold btn-big oMedium">{btn}</Button>
                </Link>
            </div>
        ) : (
            <></>
        )}

    </div>

)

export default SobreNos
