import * as React from "react"
import '../../sass/app.scss'

import "bootstrap/dist/css/bootstrap.min.css"
import Image from '../Images'

import { Row, Col } from 'react-bootstrap';
import Card from "../cardHeadTitleDetails"
import $ from 'jquery' // important: case sensitive.

const CorpoClinicoMobile = ({ data }) => {
    const number_per_cols = Math.floor(data.people.length / 2);

    const first_col = data.people.slice(0, number_per_cols)

    const second_col = data.people.slice(number_per_cols, data.people.length)

    return (
        <div className="margin-sections position-relative">
            <div className="section-space-mobile">
                <Card head={data.head} title={data.title} details={data.details} btn={data.btn.textmobile} btnlink={data.btn.link} />
            </div>
            <div className="container-corpo-clinico d-flex" >
                <div className="d-flex container-image-corpo-clinico position-relative">
                    {first_col.map((item, i) => (
                        <div className="position-absolute">
                            <img className="img-corpo-clinico" src={item.img} id={"firstCol" + i} />
                            <div className=" max-width">
                                <p className="head-xx-small oMedium mt-3 p-corpo-clinico" id={"pNameFirstCol" + i} > {item.name} </p>
                            </div>
                            <p className="head-xx-small light-gold oMedium p-corpo-clinico" id={"pOccupationFirstCol" + i}> {item.occupation}</p>
                            <p className="head-xx-small light-gold oMedium  p-corpo-clinico" id={"pEspecialityFirstCol" + i}> {item.especiality}</p>
                        </div>
                    ))}
                </div>
                <div className="d-flex container-image-corpo-clinico position-relative" >
                    {second_col.map((itemSecond, j) => (
                        <div className="position-absolute">
                            <img className="img-corpo-clinico" src={itemSecond.img} id={"secondCol" + j} />
                            <div className=" max-width">
                                <p className="head-xx-small oMedium mt-3 p-corpo-clinico" id={"pNameSecondCol" + j} > {itemSecond.name} </p>
                            </div>
                            <div>
                                <p className="head-xx-small light-gold oMedium p-corpo-clinico" id={"pOccupationSecondCol" + j}> {itemSecond.occupation}</p>
                            </div>
                            <div>
                                <p className="head-xx-small light-gold oMedium  p-corpo-clinico" id={"pEspecialitySecondCol" + j}> {itemSecond.especiality}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >

    )
}

export default CorpoClinicoMobile
