import * as React from "react"

import "bootstrap/dist/css/bootstrap.min.css"
import Image from '../Images'

import '../../sass/app.scss';

const EspecialidadesSobreNosMobile = ({ data }) => {

    return (
        <>
            <div className="no-repeat position-relative heigth-50vh" >
                <Image src={data.backgroundmobile} alt="bg-bottom" className="position-absolute z-index-minus-1 max-width bg-cover  height-max" />
                <div className="section-space-mobile align-bg-center">
                    <div className="mt-5 ">
                        <Image src={data.img} className="mt-5 max-width-6vh " alt="especialidades" />

                    </div>
                    <p className="title-large oMedium mt-4">{data.title}</p>
                    <p className="details-small oRegular mt-4">
                        {data.details}
                    </p>
                </div>
            </div>
            <div className="section-space-mobile sobrenos mb-4">
                {data.especs.map((array, i) => (
                    <div key={"first-" + i}>
                        <hr className="gold" style={{ height: "2px" }} />
                        <a href={array.href}><p className="head-medium oLight">{array.title}</p></a>
                    </div>
                ))}
                <hr className="gold" style={{ height: "2px" }} />
            </div>
        </>
    )
}

export default EspecialidadesSobreNosMobile
