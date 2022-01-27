import * as React from "react"
import '../../sass/app.scss';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "../cardHeadTitleDetails"

const SobreNosMobile = ({ data }) => (
    <>
        <div className="position-relative t-15">
            <div className="section-space-mobile">
                <Card head={data.head} title={data.title} details={data.details} btn={false} />
            </div>
        </div>
    </>
)

export default SobreNosMobile
