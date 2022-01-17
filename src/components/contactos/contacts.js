import React, { useEffect, useState } from "react";
import { Link } from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';

import '../../sass/app.scss';
import styled from "styled-components"

import { Row, Col } from 'react-bootstrap';


const Contacts = ({ data }) => {
    return (
        <StyledContacts className="mt-5 left">
            <div className="padding-5-3 bg-white">
                <h1 className="details-large gold oLight">{data.contactos.title}</h1>
                <p className="d-flex mt-3 oMedium">
                    <a href={"tel:"+data.contactos.Mlink} className="oMedium">M: {data.contactos.M}</a>
                    &nbsp;|&nbsp;
                    <a href={"tel:"+data.contactos.Tlink} className="oMedium">T: {data.contactos.T}</a>
                </p>
            </div>

            <div className="padding-5-3 bg-white">
                <h1 className="details-large gold oLight">{data.email.title}</h1>
                <p className="d-flex mt-3 oMedium">
                    <a href={"mailto:"+data.email.email} className="oMedium">{data.email.email}</a>
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
                <p className="d-flex mt-3 oMedium">
                {data.morada.rua},<br />
                {data.morada.cpostal}
                </p>
            </div>

        </StyledContacts>
    )
}

export default Contacts

const StyledContacts = styled.div`
  position: relative;
  padding: 0 6vw;
  margin-top: -50vh;
  color: #BA9E66;
  width: 100%;
  display: grid;
  gap: 3rem;
  grid-template-columns: 1.4fr 1fr;
  @media only screen and (max-width: 1090px){
    grid-template-columns: 1fr;
  }

`