import * as React from "react"

import 'bootstrap/dist/css/bootstrap.min.css';

import '../../sass/app.scss';

import { Button } from 'react-bootstrap'
import banner from '../../images/home/invisalign/banner-mobile.svg'


const InvisalignMobile = ({ data }) => (
    <div className="position-relative section-space-mobile space-sections cover-invisalign center"  >
        <img className="card-white-img" src={banner} alt={data.alt} />
        <p className="position-absolute oLight  p-over-image-invisalign details-x-large">{data.head}</p>
        <Button className="especialidades-button oMedium position-absolute btn-invisalign">
            {data.button}
        </Button>
    </div>
)

export default InvisalignMobile