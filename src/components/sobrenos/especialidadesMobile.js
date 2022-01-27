import * as React from "react"

import 'bootstrap/dist/css/bootstrap.min.css'

import '../../sass/app.scss';

const EspecialidadesSobreNosMobile = ({ data }) => {

    return (
        <>
            <div className="no-repeat position-relative heigth-50vh" style={{ backgroundImage: `url(${data.backgroundmobile})` }}>
                <div className="section-space-mobile">
                    <img src={data.img} className="mt-5" />
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
