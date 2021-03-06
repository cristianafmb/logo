import* as React from "react";
import Slider from "react-slick"
import arrowLeft from '../../images/sobrenos/arrowLeft.png';
import arrowRigth from '../../images/sobrenos/arrowRigth.png';
import "bootstrap/dist/css/bootstrap.min.css"
import '../../sass/app.scss';

function CustomRigthArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className + " m-auto arrows"}
      style={{ ...style, display: "table-cell", width: "25%", textAlign: "center" }}
      onClick={onClick}  aria-hidden="true"
    > <img src={arrowRigth} loading="lazy" alt="arrow rigth" /> </div>
  );
}

function CustomLeftArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className + " m-auto arrows"}
      style={{ ...style, display: "table-cell", width: "25%", textAlign: "center" }}
      onClick={onClick} aria-hidden="true"
    > <img src={arrowLeft} loading="lazy" alt="arrow left"/> </div>
  );
}

const Opinioes = ({ data }) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    nextArrow: <CustomRigthArrow />,
    prevArrow: <CustomLeftArrow />,
    centerMode: false
  };
  return (
    <div className="margin-sections position-relative">
      <div className="center m-auto">
        <p className="details-large oExtraBold mb-4">A Opinião dos Pacientes</p>
      </div>

      <Slider {...settings} className="slider-opinioes m-auto d-flex ">
        {data.opinioes.map((item, i) => (
          <div className="container-opinioes " key={"opiniao"+i}>
            <div key={"opinioes-slide" + i} className="gold-rectangule">

              <p className="details-xx-small align-items-stretch p-opinioes oRegular">
                {item.details}
              </p>

            </div>
            <div className="center m-auto mt-3">
               <p className="head-xxx-small oMedium">{item.head}</p>
            </div>
           
          </div>
        ))}
      </Slider>
    </div>
  );

}

export default Opinioes