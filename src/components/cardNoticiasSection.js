import * as React from "react"
import '../../gatsby-browser'

import 'bootstrap/dist/css/bootstrap.min.css';

import '../sass/app.scss';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const Invisalgin = ({ title, head, details }) => (
    <div >
        <p className="head-small">{title}</p>

        <p className="testimony-quote">{head}</p>

        <p className="especialidades-details">{details}</p>
    </div>
)

export default Invisalgin