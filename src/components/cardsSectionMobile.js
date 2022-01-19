import React from "react";
import { Link } from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';

import '../sass/app.scss';


const CardsSection = ({ data }) => {
    return (
        <>
        {console.log(data)}
            <div className="position-relative section-space-mobile ">
                <p className="head-x-small mb-4 oBold mt-4">
                    {data.title}
                </p>
                <div className="sobrenos">
                    {data.subpages.areas.map((item, i) => (
                        <div key={"area" + i}>
                            <hr className="gold" style={{ height: "2px" }} />
                            <Link to={"/especialidades"+item.link} className="text-decoration-none">
                                <p className={window.location.href.includes(item.link) ? "bold head-medium oLight text-decoration-none" : "head-medium oLight text-decoration-none"}>{item.area}</p>
                            </Link>
                        </div>

                    ))}
                    <hr className="gold" style={{ height: "2px" }} />
                </div>
            </div>
            
        </>
    )
}

export default CardsSection