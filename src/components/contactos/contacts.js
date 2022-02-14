import * as React from "react";

import "bootstrap/dist/css/bootstrap.min.css"

import '../../sass/app.scss';


const Contacts = ({ data }) => {
    return (
        <div className="mt-5 left container-contactos">
            <div className="padding-5-3 bg-white">
                <h1 className="details-large gold oLight">{data.contactos.title}</h1>
                <p className="d-flex mt-3 oMedium">
                    <a href={"tel:" + data.contactos.Mlink} className="oMedium">M: {data.contactos.M}</a>
                    &nbsp;|&nbsp;
                    <a href={"tel:" + data.contactos.Tlink} className="oMedium">T: {data.contactos.T}</a>
                </p>
            </div>

            <div className="padding-5-3 bg-white">
                <h1 className="details-large gold oLight">{data.email.title}</h1>
                <p className="d-flex mt-3 oMedium">
                    <a href={"mailto:" + data.email.email} className="oMedium">{data.email.email}</a>
                </p>
            </div>

            <div className="padding-5-3 bg-white">
                <h1 className="details-large gold oLight">{data.horario.title}</h1>
                <p className="d-flex mt-3 oMedium">
                    {data.horario.semana}<br />
                    {data.horario.sabado}
                </p>
            </div>

            <div className="padding-5-3 bg-white">
                <h1 className="details-large gold oLight">{data.morada.title}</h1>
                <a href="https://www.google.com/maps/place/Av.+Europa+741,+3800-533+Cacia/@40.6682766,-8.6101639,17z/data=!3m1!4b1!4m5!3m4!1s0xd2398fa7dca35fb:0xa8c82186ec639a9f!8m2!3d40.6682726!4d-8.6079752" target="_blank">
                    <p className="d-flex mt-3 oMedium">
                        {data.morada.rua},<br />
                        {data.morada.cpostal}
                    </p>
                </a>

            </div>

        </div>
    )
}

export default Contacts
