import React, { useEffect } from "react";
import '../../sass/app.scss'

import "bootstrap/dist/css/bootstrap.min.css"

import { Row, Col } from 'react-bootstrap';
import Card from "../cardHeadTitleDetails"
import $ from 'jquery' // important: case sensitive.


const CorpoClinicoMobile = ({ data }) => {
    
    const number_per_cols = Math.floor(data.people.length / 4);
    var i, currentFirst, currentSecond, currentThird, currentFourth
    i = currentFirst = currentSecond = currentThird = currentFourth = 0
    const first_col = data.people.slice(0, number_per_cols)
    i = i + number_per_cols
    const second_col = data.people.slice(i, i + number_per_cols)
    i = i + number_per_cols
    const third_col = data.people.slice(i, i + number_per_cols)
    i = i + number_per_cols
    const fourth_col = data.people.slice(i, i + number_per_cols)

    const timer_first = 6000
    const timer_second = 10000
    const timer_third = 9000
    const timer_fourth = 12000

    const class_first_top = "top-first-mobile"
    const class_second_top = "top-second-mobile"
    const class_third_top = "top-third-mobile"
    const class_fourth_top = "top-fourth-mobile"

    useEffect(() => {

        $('#firstMobile0').addClass(class_first_top)
        $('#nameFirstMobile0').addClass(class_first_top)
        $('#occupationFirstMobile0').addClass(class_first_top)
        $('#especialityFirstMobile0').addClass(class_first_top)

        $('#secondMobile0').addClass(class_second_top)
        $('#nameSecondMobile0').addClass(class_second_top)
        $('#occupationSecondMobile0').addClass(class_second_top)
        $('#especialitySecondMobile0').addClass(class_second_top)

        $('#thirdMobile0').addClass(class_third_top)
        $('#nameThirdMobile0').addClass(class_third_top)
        $('#occupationThirdMobile0').addClass(class_third_top)
        $('#especialityThirdMobile0').addClass(class_third_top)

        $('#fourthMobile0').addClass(class_fourth_top)
        $('#nameFourthMobile0').addClass(class_fourth_top)
        $('#occupationFourthMobile0').addClass(class_fourth_top)
        $('#especialityFourthMobile0').addClass(class_fourth_top)


        setTimeout(nextBackgroundFirst, timer_first);
        setTimeout(nextBackgroundSecond, timer_second);
        setTimeout(nextBackgroundThird, timer_third);
        setTimeout(nextBackgroundFourth, timer_fourth);



        function nextBackgroundFirst() {
            $('#firstMobile' + currentFirst).removeClass(class_first_top)
            $('#nameFirstMobile' + currentFirst).removeClass(class_first_top)
            $('#occupationFirstMobile' + currentFirst).removeClass(class_first_top)
            $('#especialityFirstMobile' + currentFirst).removeClass(class_first_top)
            currentFirst = ++currentFirst % first_col.length
            $('#firstMobile' + currentFirst).addClass(class_first_top)
            $('#nameFirstMobile' + currentFirst).addClass(class_first_top)
            $('#occupationFirstMobile' + currentFirst).addClass(class_first_top)
            $('#especialityFirstMobile' + currentFirst).addClass(class_first_top)
            setTimeout(nextBackgroundFirst, timer_first);
        }

        function nextBackgroundSecond() {
            $('#secondMobile' + currentSecond).removeClass(class_second_top)
            $('#nameSecondMobile' + currentSecond).removeClass(class_second_top)
            $('#occupationSecondMobile' + currentSecond).removeClass(class_second_top)
            $('#especialitySecondMobile' + currentSecond).removeClass(class_second_top)
            currentSecond = ++currentSecond % second_col.length
            $('#secondMobile' + currentSecond).addClass(class_second_top)
            $('#nameSecondMobile' + currentSecond).addClass(class_second_top)
            $('#occupationSecondMobile' + currentSecond).addClass(class_second_top)
            $('#especialitySecondMobile' + currentSecond).addClass(class_second_top)
            setTimeout(nextBackgroundSecond, timer_second);
        }

        function nextBackgroundThird() {
            $('#thirdMobile' + currentThird).removeClass(class_third_top)
            $('#nameThirdMobile' + currentThird).removeClass(class_third_top)
            $('#occupationThirdMobile' + currentThird).removeClass(class_third_top)
            $('#especialityThirdMobile' + currentThird).removeClass(class_third_top)
            currentThird = ++currentThird % third_col.length
            $('#thirdMobile' + currentThird).addClass(class_third_top)
            $('#nameThirdMobile' + currentThird).addClass(class_third_top)
            $('#occupationThirdMobile' + currentThird).addClass(class_third_top)
            $('#especialityThirdMobile' + currentThird).addClass(class_third_top)
            setTimeout(nextBackgroundThird, timer_third);
        }

        function nextBackgroundFourth() {
            $('#fourthMobile' + currentFourth).removeClass(class_fourth_top)
            $('#nameFourthMobile' + currentFourth).removeClass(class_fourth_top)
            $('#occupationFourthMobile' + currentFourth).removeClass(class_fourth_top)
            $('#especialityFourthMobile' + currentFourth).removeClass(class_fourth_top)
            currentFourth = ++currentFourth % fourth_col.length
            $('#fourthMobile' + currentFourth).addClass(class_fourth_top)
            $('#nameFourthMobile' + currentFourth).addClass(class_fourth_top)
            $('#occupationFourthMobile' + currentFourth).addClass(class_fourth_top)
            $('#especialityFourthMobile' + currentFourth).addClass(class_fourth_top)
            setTimeout(nextBackgroundFourth, timer_fourth);
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
                            <img className="img-corpo-clinico" src={item.imgMobile} alt={item.alt} id={"firstMobile" + i} />
                            <div className=" max-width">
                                <p className="head-xx-small oMedium mt-3 p-corpo-clinico" id={"nameFirstMobile" + i} > {item.name} </p>
                            </div>
                            <div className=" max-width">
                                <p className="head-xx-small light-gold oMedium p-corpo-clinico" id={"occupationFirstMobile" + i}> {item.occupation}</p>
                            </div>
                            <div className=" max-width">
                                <p className="head-xx-small light-gold oMedium  p-corpo-clinico" id={"especialityFirstMobile" + i}> {item.especiality}</p>
                            </div>
                        </div>
                    ))}
                </Col>
                <Col sm="6" md="6" lg="6" className="position-relative">
                    {second_col.map((item, i) => (
                        <div className="position-absolute" key={"corpo-mobile-second" + i}>
                            <img className="img-corpo-clinico" src={item.imgMobile} alt={item.alt} id={"secondMobile" + i} />
                            <div className=" max-width">
                                <p className="head-xx-small oMedium mt-3 p-corpo-clinico" id={"nameSecondMobile" + i} > {item.name} </p>
                            </div>
                            <div className=" max-width">
                                <p className="head-xx-small light-gold oMedium p-corpo-clinico" id={"occupationSecondMobile" + i}> {item.occupation}</p>
                            </div>
                            <div className=" max-width">
                                <p className="head-xx-small light-gold oMedium  p-corpo-clinico" id={"especialitySecondMobile" + i}> {item.especiality}</p>
                            </div>
                        </div>
                    ))}
                </Col>
            </Row>

            <Row className="container-corpo-clinico grid-container-two-rows min-height-25vh">
                <Col sm="6" md="6" lg="6" className="position-relative ">
                    {third_col.map((item, i) => (
                        <div className="position-absolute" key={"corpo-mobile-third" + i}>
                            <img className="img-corpo-clinico" src={item.imgMobile} alt={item.alt} id={"thirdMobile" + i} />
                            <div className=" max-width">
                                <p className="head-xx-small oMedium mt-3 p-corpo-clinico" id={"nameThirdMobile" + i} > {item.name} </p>
                            </div>
                            <div className=" max-width">
                                <p className="head-xx-small light-gold oMedium p-corpo-clinico" id={"occupationThirdMobile" + i}> {item.occupation}</p>
                            </div>
                            <div className=" max-width">
                                <p className="head-xx-small light-gold oMedium  p-corpo-clinico" id={"especialityThirdMobile" + i}> {item.especiality}</p>
                            </div>
                        </div>
                    ))}
                </Col>
                <Col sm="6" md="6" lg="6" className="position-relative">
                    {fourth_col.map((item, m) => (
                        <div className="position-absolute" key={"corpo-mobile-fourth" + m}>
                            <img className="img-corpo-clinico" src={item.imgMobile} alt={item.alt} id={"fourthMobile" + m} />
                            <div className=" max-width">
                                <p className="head-xx-small oMedium mt-3 p-corpo-clinico" id={"nameFourthMobile" + m} > {item.name} </p>
                            </div>
                            <div className=" max-width">
                                <p className="head-xx-small light-gold oMedium p-corpo-clinico" id={"occupationFourthMobile" + m}> {item.occupation}</p>
                            </div>
                            <div className=" max-width">
                                <p className="head-xx-small light-gold oMedium  p-corpo-clinico" id={"especialityFourthMobile" + m}> {item.especiality}</p>
                            </div>
                        </div>
                    ))}
                </Col>
            </Row>

        </div >

    )
}

export default CorpoClinicoMobile
