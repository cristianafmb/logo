import * as React from "react"

import "bootstrap/dist/css/bootstrap.min.css"

import '../../sass/app.scss';
import Image from '../Images'

import { Button } from 'react-bootstrap'


const InvisalignMobile = ({ data }) => (
    <div className="position-relative section-space-mobile space-sections cover-invisalign center"  >
        <Image className="card-white-img" src={data.imgmobile} alt={data.alt} />
        <p className="position-absolute oLight  p-over-image-invisalign details-x-large">{data.head}</p>
        <Button className="especialidades-button oMedium position-absolute btn-invisalign">
            {data.button}
        </Button>
    </div>
)

export default InvisalignMobile