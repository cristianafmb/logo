import * as React from "react"
import '../../gatsby-browser'

import '../sass/app.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

const UserIcon = ({ img, alt }) => (
    <div>
        <img src={img} alt={alt} className="user-icon" />
    </div>
)

export default UserIcon