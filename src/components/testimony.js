import * as React from "react"
import '../../gatsby-browser'

import '../sass/app.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

import UserIcon from '../components/userIcon'

const Testimony = ({  img, alt, quote, tfunction,person  }) => (
    <div style={{textAlign: "center"}}>
       <UserIcon img={img} alt={alt}/>
       <p className="testimony-quote">"{quote}"</p>
       <p className="testimony-person-function">{person}</p>
       <p className="testimony-person-function">{tfunction}</p>
    </div>
)

export default Testimony