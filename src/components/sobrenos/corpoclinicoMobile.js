import React, { useEffect } from "react";
import '../../sass/app.scss'

import "bootstrap/dist/css/bootstrap.min.css"
import Image from '../Images'

import { Row, Col } from 'react-bootstrap';
import Card from "../cardHeadTitleDetails"
import $ from 'jquery' // important: case sensitive.


const CorpoClinicoMobile = ({ data }) => {

    const number_per_cols = Math.floor(data.people.length / 4);

    var i = 0;

    const first_col = data.people.slice(0, i + number_per_cols)

    i = i + number_per_cols

    const second_col = data.people.slice(i, i + number_per_cols)

    i = i + number_per_cols

    const third_col = data.people.slice(i, i + number_per_cols)

    i = i + number_per_cols

    const fourth_col = data.people.slice(i, i + number_per_cols)

    console.log(first_col, second_col, third_col, fourth_col)


    var currentFirst = 0;
    var currentSecond = 0;
    var currentThird = 0;
    var currentFourth = 0;
    useEffect(() => {
        $('#first0').addClass("top-first-mobile")
        $('#nameFirst0').addClass("top-first-mobile")
        $('#occupationFirst0').addClass("top-first-mobile")
        $('#especialityFirst0').addClass("top-first-mobile")

        $('#second0').addClass("top-second-mobile")
        $('#nameSecond0').addClass("top-second-mobile")
        $('#occupationSecond0').addClass("top-second-mobile")
        $('#especialitySecond0').addClass("top-second-mobile")

        $('#third0').addClass("top-third-mobile")
        $('#nameThird0').addClass("top-third-mobile")
        $('#occupationThird0').addClass("top-third-mobile")
        $('#especialityThird0').addClass("top-third-mobile")

        $('#fourth0').addClass("top-fourth-mobile")
        $('#nameFourth0').addClass("top-fourth-mobile")
        $('#occupationFourth0').addClass("top-fourth-mobile")
        $('#especialityFourth0').addClass("top-fourth-mobile")

        setTimeout(nextBackgroundFirst, 5000);
        setTimeout(nextBackgroundSecond, 7000);
        setTimeout(nextBackgroundThird, 9000);
        setTimeout(nextBackgroundFourth, 6000);

        function nextBackgroundFirst() {
            $('#first' + currentFirst).removeClass("top-first-mobile")
            $('#nameFirst' + currentFirst).removeClass("top-first-mobile")
            $('#occupationFirst' + currentFirst).removeClass("top-first-mobile")
            $('#especialityFirst' + currentFirst).removeClass("top-first-mobile")
            currentFirst = ++currentFirst % first_col.length
            $('#first' + currentFirst).addClass("top-first-mobile")
            $('#nameFirst' + currentFirst).addClass("top-first-mobile")
            $('#occupationFirst' + currentFirst).addClass("top-first-mobile")
            $('#especialityFirst' + currentFirst).addClass("top-first-mobile")
            setTimeout(nextBackgroundFirst, 5000);
        }

        function nextBackgroundSecond() {
            $('#second' + currentSecond).removeClass("top-second-mobile")
            $('#nameSecond' + currentSecond).removeClass("top-second-mobile")
            $('#occupationSecond' + currentSecond).removeClass("top-second-mobile")
            $('#especialitySecond' + currentSecond).removeClass("top-second-mobile")
            currentSecond = ++currentSecond % second_col.length
            $('#second' + currentSecond).addClass("top-second-mobile")
            $('#nameSecond' + currentSecond).addClass("top-second-mobile")
            $('#occupationSecond' + currentSecond).addClass("top-second-mobile")
            $('#especialitySecond' + currentSecond).addClass("top-second-mobile")
            setTimeout(nextBackgroundSecond, 7000);
        }

        function nextBackgroundThird() {
            $('#third' + currentThird).removeClass("top-third-mobile")
            $('#nameThird' + currentThird).removeClass("top-third-mobile")
            $('#occupationThird' + currentThird).removeClass("top-third-mobile")
            $('#especialityThird' + currentThird).removeClass("top-third-mobile")
            currentThird = ++currentThird % second_col.length
            $('#third' + currentThird).addClass("top-third-mobile")
            $('#nameThird' + currentThird).addClass("top-third-mobile")
            $('#occupationThird' + currentThird).addClass("top-third-mobile")
            $('#especialityThird' + currentThird).addClass("top-third-mobile")
            setTimeout(nextBackgroundThird, 9000);
        }

        function nextBackgroundFourth() {
            $('#fourth' + currentFourth).removeClass("top-fourth-mobile")
            $('#nameFourth' + currentFourth).removeClass("top-fourth-mobile")
            $('#occupationFourth' + currentFourth).removeClass("top-fourth-mobile")
            $('#especialityFourth' + currentFourth).removeClass("top-fourth-mobile")
            currentFourth = ++currentFourth % second_col.length
            $('#fourth' + currentFourth).addClass("top-fourth-mobile")
            $('#nameFourth' + currentFourth).addClass("top-fourth-mobile")
            $('#occupationFourth' + currentFourth).addClass("top-fourth-mobile")
            $('#especialityFourth' + currentFourth).addClass("top-fourth-mobile")
            setTimeout(nextBackgroundFourth, 6000);
        }
    })


    return (
        <div className="margin-sections position-relative">

            <div className="section-space-mobile">
                <Card head={data.head} title={data.title} details={data.details} btn={data.btn.textmobile} btnlink={data.btn.link} />
            </div>

            <Row className="container-corpo-clinico grid-container-two-rows min-height-25vh">
                <Col sm="6" md="6" lg="6" className="position-relative">
                    {first_col.map((item, i) => (
                        <div className="position-absolute" key={"corpo-mobile-first" + i}>
                            <img className="img-corpo-clinico" src={item.img} id={"first" + i} />
                            <div className=" max-width">
                                <p className="head-xx-small oMedium mt-3 p-corpo-clinico" id={"nameFirst" + i} > {item.name} </p>
                            </div>
                            <div className=" max-width">
                                <p className="head-xx-small light-gold oMedium p-corpo-clinico" id={"occupationFirst" + i}> {item.occupation}</p>
                            </div>
                            <div className=" max-width">
                                <p className="head-xx-small light-gold oMedium  p-corpo-clinico" id={"especialityFirst" + i}> {item.especiality}</p>
                            </div>
                        </div>
                    ))}
                </Col>
                <Col sm="6" md="6" lg="6" className="position-relative">
                    {second_col.map((item, i) => (
                        <div className="position-absolute" key={"corpo-mobile-second" + i}>
                            <img className="img-corpo-clinico" src={item.img} id={"second" + i} />
                            <div className=" max-width">
                                <p className="head-xx-small oMedium mt-3 p-corpo-clinico" id={"nameSecond" + i} > {item.name} </p>
                            </div>
                            <div className=" max-width">
                                <p className="head-xx-small light-gold oMedium p-corpo-clinico" id={"occupationSecond" + i}> {item.occupation}</p>
                            </div>
                            <div className=" max-width">
                                <p className="head-xx-small light-gold oMedium  p-corpo-clinico" id={"especialitySecond" + i}> {item.especiality}</p>
                            </div>
                        </div>
                    ))}
                </Col>
            </Row>

            <Row className="container-corpo-clinico grid-container-two-rows min-height-25vh">
                <Col sm="6" md="6" lg="6" className="position-relative ">
                    {third_col.map((item, i) => (
                        <div className="position-absolute" key={"corpo-mobile-third" + i}>
                            <img className="img-corpo-clinico" src={item.img} id={"third" + i} />
                            <div className=" max-width">
                                <p className="head-xx-small oMedium mt-3 p-corpo-clinico" id={"nameThird" + i} > {item.name} </p>
                            </div>
                            <div className=" max-width">
                                <p className="head-xx-small light-gold oMedium p-corpo-clinico" id={"occupationThird" + i}> {item.occupation}</p>
                            </div>
                            <div className=" max-width">
                                <p className="head-xx-small light-gold oMedium  p-corpo-clinico" id={"especialityThird" + i}> {item.especiality}</p>
                            </div>
                        </div>
                    ))}
                </Col>
                <Col sm="6" md="6" lg="6" className="position-relative">
                    {fourth_col.map((item, m) => (
                        <div className="position-absolute" key={"corpo-mobile-fourth" + m}>
                            <img className="img-corpo-clinico" src={item.img} id={"fourth" + m} />
                            <div className=" max-width">
                                <p className="head-xx-small oMedium mt-3 p-corpo-clinico" id={"nameFourth" + m} > {item.name} </p>
                            </div>
                            <div className=" max-width">
                                <p className="head-xx-small light-gold oMedium p-corpo-clinico" id={"occupationFourth" + m}> {item.occupation}</p>
                            </div>
                            <div className=" max-width">
                                <p className="head-xx-small light-gold oMedium  p-corpo-clinico" id={"especialityFourth" + m}> {item.especiality}</p>
                            </div>
                        </div>
                    ))}
                </Col>
            </Row>

        </div >

    )
}

export default CorpoClinicoMobile
