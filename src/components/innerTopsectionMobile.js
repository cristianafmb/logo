import * as React from "react";
import { Link } from "gatsby"

import "bootstrap/dist/css/bootstrap.min.css"

import '../sass/app.scss';

const InnerTopsectionMobile = ({ areas, page, location }) => {
    var pathname = location.pathname;

    return (
        <div className="pt-5 position-relative section-space-mobile ">
            <p className="head-x-small oBold mt-5">{page.head}</p>
            <p className="title-large oMedium mt-2">{page.title}</p>
            <p className="head-x-small mb-4 oBold mt-5">
                {areas.head}
            </p>
            <div className="sobrenos">
                {areas.areas.map((item, i) => (
                    < div key = { "area" + i } >
                        <hr className="gold" style={{ height: "2px" }} />
                        <Link to={item.href} className="text-decoration-none">
                            <p className={pathname.includes(item.href) ? "bold head-medium oLight text-decoration-none" : "head-medium oLight text-decoration-none"}>{item.title}</p>
                        </Link>
                    </div>

                ))}
            <hr className="gold" style={{ height: "2px" }} />
        </div>
        </div >
    )
}

export default InnerTopsectionMobile