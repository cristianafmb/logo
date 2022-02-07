import * as React from "react"
import '../../sass/app.scss';
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"

import $ from 'jquery' // important: case sensitive.
import { Row, Col, Button } from 'react-bootstrap'

const CorpoClinico = ({ data }) => {
    const number_per_cols = Math.floor(data.people.length / 3);

    const first_col = data.people.slice(0, number_per_cols)

    const second_col = data.people.slice(number_per_cols, number_per_cols * 2)
    const third_col = data.people.slice(number_per_cols * 2, data.people.length)

    if (typeof window !== 'undefined') {
        var dataImg1 = $('#imgFirstCol');
        var dataName1 = $('#nameFirstCol')
        var dataOccupation1 = $('#occupationFirstCol')
        var dataEspeciality1 = $('#especialityFirstCol')
        var currentFirstCol = 0;

        var dataImg2 = $('#imgSecondCol');
        var dataName2 = $('#nameSecondCol')
        var dataOccupation2 = $('#occupationSecondCol')
        var dataEspeciality2 = $('#especialitySecondCol')
        var currentSecondCol = 0;

        var dataImg3 = $('#imgThirdCol');
        var dataName3 = $('#nameThirdCol')
        var dataOccupation3 = $('#occupationThirdCol')
        var dataEspeciality3 = $('#especialityThirdCol')
        var currentThirdCol = 0;

        dataImg1.css('background', `url(${first_col[0].img})`);
        dataName1.html(first_col[0].name)
        dataOccupation1.html(first_col[0].occupation)
        dataEspeciality1.html(first_col[0].especiality)
        setTimeout(nextBackgroundFirstCol(), 5000);

        dataImg2.css('background', `url(${second_col[0].img})`);
        dataName2.html(second_col[0].name)
        dataOccupation2.html(second_col[0].occupation)
        dataEspeciality2.html(second_col[0].especiality)
        setTimeout(nextBackgroundSecondCol(), 9000);

        dataImg3.css('background', `url(${third_col[0].img})`);
        dataName3.html(third_col[0].name)
        dataOccupation3.html(third_col[0].occupation)
        dataEspeciality3.html(third_col[0].especiality)
        setTimeout(nextBackgroundThirdCol(), 7000);

        function nextBackgroundFirstCol() {
            dataImg1.css(
                'background',
                `url(${first_col[currentFirstCol = ++currentFirstCol % first_col.length].img})`
            );
            dataName1.html(first_col[currentFirstCol].name)
            dataEspeciality1.html(first_col[currentFirstCol].especiality)
            dataOccupation1.html(first_col[currentFirstCol].occupation)
            setTimeout(nextBackgroundFirstCol, 5000);
        }

        function nextBackgroundSecondCol() {
            dataImg2.css(
                'background',
                `url(${second_col[currentSecondCol = ++currentSecondCol % second_col.length].img})`
            );
            dataName2.html(second_col[currentSecondCol].name)
            dataEspeciality2.html(second_col[currentSecondCol].especiality)
            dataOccupation2.html(second_col[currentSecondCol].occupation)
            setTimeout(nextBackgroundSecondCol, 9000);
        }

        function nextBackgroundThirdCol() {
            dataImg3.css(
                'background',
                `url(${third_col[currentThirdCol = ++currentThirdCol % third_col.length].img})`
            );
            dataName3.html(third_col[currentThirdCol].name)
            dataEspeciality3.html(third_col[currentThirdCol].especiality)
            dataOccupation3.html(third_col[currentThirdCol].occupation)
            setTimeout(nextBackgroundThirdCol, 7000);
        }


    }
        return (
            <div className="margin-sections position-relative">

                <Row className="container-corpo-clinico">
                    <Col sm="12" md="4" lg="4" className="m-auto">
                        <p className="head-x-small oBold">{data.head}</p>
                        <p className="title-large oExtraBold mt-3 mb-5">{data.title}</p>
                        <p className="details-small mt-2 oRegular">{data.details}</p>
                        <Link to={data.btn.link}>
                            <Button variant="warning" size="sm" className="button-intro-home-saber-mais btn-big oMedium">{data.btn.text}</Button>
                        </Link>
                    </Col>
                    <Col sm="12" md="7" lg="7" style={{ marginLeft: "5px" }}>
                        <Row>
                            <Col sm="12" lg="4" md="4">
                                <div className="container-image-corpo-clinico">
                                    <div id="imgFirstCol" className="img-corpo-clinico" />
                                    <div className=" max-width">
                                        <p className="head-xx-small oMedium mt-3 " id="nameFirstCol" />
                                    </div>
                                    <p className="head-xx-small light-gold oMedium " id="occupationFirstCol" />
                                    <p className="head-xx-small light-gold oMedium  " id="especialityFirstCol" />
                                </div>

                            </Col>
                            <Col sm="12" lg="4" md="4">
                                <div className="container-image-corpo-clinico">
                                    <div id="imgSecondCol" className="img-corpo-clinico" />
                                    <div className=" max-width">
                                        <p className="head-xx-small oMedium mt-3 " id="nameSecondCol" />
                                    </div>
                                    <p className="head-xx-small light-gold oMedium " id="occupationSecondCol" />
                                    <p className="head-xx-small light-gold oMedium  " id="especialitySecondCol" />
                                </div>
                            </Col>
                            <Col sm="12" lg="4" md="4">
                                <div className="container-image-corpo-clinico">
                                    <div id="imgThirdCol" className="img-corpo-clinico" />
                                    <div className=" max-width">
                                        <p className="head-xx-small oMedium mt-3 " id="nameThirdCol" />
                                    </div>
                                    <p className="head-xx-small light-gold oMedium " id="occupationThirdCol" />
                                    <p className="head-xx-small light-gold oMedium  " id="especialityThirdCol" />
                                </div>
                            </Col>
                        </Row>


                    </Col>
                </Row >
            </div >
        )
    
}

export default CorpoClinico
