import * as React from "react"
import '../../sass/app.scss';
import "bootstrap/dist/css/bootstrap.min.css"


const CorpoClinico = ({ img, name, occupation, especiality, classname, id, interval, numImages }) => {
    var timer = setInterval(nextImage, interval);
    var curImage = 0;

    function nextImage() {
        var e;
        // remove showMe class from current image
        e = document.getElementById("slideimg" + curImage);
        removeClass(e, "showMe");

        // compute next image
        curImage++;
        if (curImage > numImages - 1) {
            curImage = 0;
        }

        // add showMe class to next image
        e = document.getElementById("slideimg" + curImage);
        addClass(e, "showMe");
    }

    function addClass(elem, name) {
        var c = elem.className;
        if (c) c += " ";  // if not blank, add a space separator
        c += name;
        elem.className = c;
    }

    function removeClass(elem, name) {
        var c = elem.className;
        elem.className = c.replace(name, "").replace(/\s+/g, " ").replace(/^\s+|\s+$/g, "");  // remove name and extra blanks
    }

    return (
        <div className={classname} id={id}>
            <img src={img} className="img-corpo-clinico " />
            <div className="d-flex max-width">
                <p className="head-xx-small oMedium mt-3 d-flex" >
                    {name}
                </p>
            </div>
            <p className="head-xx-small light-gold oMedium " >
                {occupation}
            </p>
            <p className="head-xx-small light-gold oMedium  ">
                {especiality}
            </p>
        </div>

    )
}

export default CorpoClinico
