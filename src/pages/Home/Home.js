import React, { useEffect, useState } from 'react'
import HomeMenu from './HomeMenu/HomeMenu'
// kết nối redux
import { useSelector, useDispatch } from 'react-redux';
import MultipleRows from '../../components/ReactSlick/MultipleRowSlick';
import { layDanhSachPhimAction } from './../../redux/acitons/QuanLyPhimActions'
import { layDanhSachHeThongRapAction } from '../../redux/acitons/QuanLyRapAction';
import HomeCarousel from '../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel';
export default function Home(props) {

    const { arrFilm } = useSelector(state => state.QuanLyPhimReducer);
    const { heThongRapChieu } = useSelector(state => state.QuanLyRapReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        const action = layDanhSachPhimAction();
        dispatch(action);
        dispatch(layDanhSachHeThongRapAction());
    }, [])



    return (
        <div>
            <HomeCarousel />
            
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 mx-auto" >
                    <MultipleRows arrFilm={arrFilm} />
                </div>
            </section>


            <div className=" mt-20 container max-w-max max-h-full">
                <HomeMenu heThongRapChieu={heThongRapChieu} />
            </div>
        </div>
    )
}
