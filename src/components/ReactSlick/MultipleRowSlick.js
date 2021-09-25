import React, { Component } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Slider from "react-slick";
import { SET_FILM_DANG_CHIEU, SET_FILM_SAP_CHIEU } from "../../redux/types/QuanLyPhimType";
import FilmFlip from "../Film/FilmFlip/FilmFlip";
// Css MultipleRowSlick
import styleSlick from './MultipleRowSlick.module.css';




function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick['slick-next']}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
    </div>

  );
}



function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick['slick-prev']}`}
      style={{ ...style, display: "block", left: '-50px' }}
      onClick={onClick}
    >
    </div>
  );
}


const MultipleRows = (props) => {

  const { dangChieu, sapChieu } = useSelector(state => state.QuanLyPhimReducer)
  const dispatch = useDispatch();

  const renderFilm = () => {
    return props.arrFilm.slice(0, 12).map((item, index) => {
      return <div className="mt-2" key={index}>
        <FilmFlip item={item} />
      </div>
    })
  }

  let activeClassDC = dangChieu === true ? 'active_Film' : 'none_active_Film';

  let activeClassSC = sapChieu === true ? 'active_Film' : 'none_active_Film';


  const settings = {
    className: "center variable-width",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="text-center ">
      <button type="button" className={`${styleSlick[activeClassDC]} px-8 py-3 font-semibold rounded  border-gray-800 border mr-2`} onClick={() => {
        const action = { type: SET_FILM_DANG_CHIEU }
        dispatch(action);
      }}>Đang Chiếu</button>
      <button type="button" className={`${styleSlick[activeClassSC]} px-8 py-3 font-semibold rounded  border-gray-800 border`} onClick={() => {
        const action = { type: SET_FILM_SAP_CHIEU }
        dispatch(action);
      }}>Sắp Chiếu</button>
      <Slider {...settings}>
        {renderFilm()}
      </Slider>
    </div>
  );
}


export default MultipleRows;