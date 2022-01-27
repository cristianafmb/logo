import React from "react";
import { Link } from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';

import '../sass/app.scss';


const CardsSectionMobile = ({ page, cards, location }) => {
    if (location !== 'undefined')
        var pathname = location.pathname;

    return (
        <>
            <div className="position-relative section-space-mobile ">
                <p className="head-x-small mb-4 oBold mt-4">
                    {page.title}
                </p>
                <div className="sobrenos">
                    {cards.map((item, i) => (
                        <div key={"area" + i}>
                            <hr className="gold" style={{ height: "2px" }} />
                            <Link to={item.href} className="text-decoration-none">
                                <p className={pathname.includes(item.href) ? "bold head-medium oLight text-decoration-none" : "head-medium oLight text-decoration-none"}>{item.title}</p>
                            </Link>
                        </div>

                    ))}
                    <hr className="gold" style={{ height: "2px" }} />
                </div>
            </div>

        </>
    )
}

export default CardsSectionMobile