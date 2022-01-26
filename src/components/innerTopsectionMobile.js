import React, { useEffect, useState } from "react";
import { Link } from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';

import '../sass/app.scss';

const InnerTopsection = ({ data }) => {
    const url = ""
    if (typeof window === 'undefined') {
        url = window.location.href
    }
    return (
        <div className="pt-5 position-relative section-space-mobile ">
            <p className="head-x-small oBold mt-5">{data.head}</p>
            <p className="title-large oMedium mt-2">{data.title}</p>
            <p className="head-x-small mb-4 oBold mt-5">
                {data.areas.head}
            </p>
            <div className="sobrenos">
                {data.areas.areas.map((item, i) => (

                    <div key={"area" + i}>
                        <hr className="gold" style={{ height: "2px" }} />
                        <Link to={item.link} className="text-decoration-none">
                            <p className={url.includes(item.link) ? "bold head-medium oLight text-decoration-none" : "head-medium oLight text-decoration-none"}>{item.area}</p>
                        </Link>
                    </div>

                ))}
                <hr className="gold" style={{ height: "2px" }} />
            </div>
        </div>
    )
}

export default InnerTopsection