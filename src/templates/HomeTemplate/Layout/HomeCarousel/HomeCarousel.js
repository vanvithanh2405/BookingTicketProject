import React, { useEffect } from 'react'
import { Carousel } from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { getCarouselAction } from '../../../../redux/acitons/CarouselAction';

// Css
import './HomeCarousel.css'

export default function HomeCarousel(props) {

    const { arrImg } = useSelector(state => state.CarouselReducer);

    const dispatch = useDispatch();


    // sẽ tự kích hoạt khi component load ra
    useEffect(() => {
        //1 action = {type:'',data}
        //2 (phải cài middleware): callbackFunction (dispatch)

        const action = getCarouselAction()
        dispatch(action);
    }, [dispatch]);


    const contentStyle = {
        height: "600px",
        color: "#fff",
        lineHeight: "160px",
        textAlign: "center",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    };

    const renderImg = () => {
        return arrImg.map((item, index) => {
            return <div key={index}>
                <div style={{...contentStyle}}>
                    <img src={item.hinhAnh} className="opacity-1 w-full h-full" alt={item.hinhAnh} />
                </div>
            </div>
        })
    }

    return (

        <Carousel style={{ width: '100%', padding: 0, margin: 0 }} effect="fade" >
           {renderImg()}
        </Carousel>

    )
}
// style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}

