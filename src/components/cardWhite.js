import React, { useEffect, useState } from "react";
import { Link } from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';

import '../sass/app.scss';

import { Row, Col, Button } from 'react-bootstrap';


const CardWhite = ({ data }) => {

    return (
        <div className="bg-white height-max position-relative hover-border-gold position-relative">

            <div className="p-4">
                <p className="head-medium mt-3 mb-4 oLight">{data.title}</p>
                <p className="head-x-small gold line-height mb-50 oRegular">{data.details}</p>
                <div className="max-width m-auto center">
                     <Button className="btn-questoes btn btn-warning btn-sm btn-card-white oMedium" href={data.href}>
                    {data.btntext}
                </Button>
                </div>
               
            </div>

        </div>
    )
}

export default CardWhite