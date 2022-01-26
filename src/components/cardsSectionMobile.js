import React from "react";
import { Link } from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';

import '../sass/app.scss';


const CardsSection = ({ title, areas }) => {
    return (
        <>
            <div className="position-relative section-space-mobile ">
                <p className="head-x-small mb-4 oBold mt-4">
                    {title}
                </p>
                <div className="sobrenos">
                    {areas.map((item, i) => (
                        <div key={"area" + i}>
                            {console.log(item)}
                            <hr className="gold" style={{ height: "2px" }} />
                            <Link to={item.link} className="text-decoration-none">
                                <p className={window.location.href.includes(item.link) ? "bold head-medium oLight text-decoration-none" : "head-medium oLight text-decoration-none"}>{item.title}</p>
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