/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment, useState } from 'react'
import { Tabs, Radio, Space } from 'antd';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
const { TabPane } = Tabs;




export default function HomeMenu(props) {

    const renderHeThongRap = () => {
        return props.heThongRapChieu.map((heThongRap, index) => {
            // Load ra logo rạp 
            return <TabPane tab={<img src={heThongRap.logo} className="rounded-full" width="50" />} key={index}>
                {/* Load ra hệ thống cụm rạp  */}
                <Tabs tabPosition={tabPosition}>
                    {heThongRap.lstCumRap.slice(0,5).map((cumRap, index) => {
                        return <TabPane tab={
                            <div style={{ width: '320px' }} className="flex align-middle justify-items-center">
                                <img src={cumRap.hinhAnh} style={{ width: 60 , height:60 }} />
                                <div className="text-left ml-2 font-semibold">
                                    {cumRap.tenCumRap}
                                    <div className="text-s font-normal ">
                                        {cumRap.diaChi.length > 35 ? <span>{cumRap.diaChi.slice(0, 35)} ...</span> : <span>{cumRap.diaChi}</span>}
                                    </div>
                                    <div className="text-red-500 text-s font-normal">
                                        [Chi tiết]
                                    </div>
                                </div>
                            </div>
                        }
                            key={index}>
                            {/* Load phim tương ứng  */}
                            {cumRap.danhSachPhim.slice(0,2).map((phim, index) => {
                                return <Fragment key={index}>
                                    <div>
                                        <div style={{ display: 'flex' }} className="mb-5">
                                            <img style={{ height: 80, width: 90 }} src={phim.hinhAnh} alt={phim.hinhAnh} />
                                            <div className="ml-10">
                                                <h2 className=" text-2xl font-semibold ">{phim.tenPhim}</h2>
                                                <p className="text-xs">120 phút - 8.0 IMDb - 2D/Digital</p>
                                                <div className="grid grid-cols-5 gap-3">
                                                    {phim.lstLichChieuTheoPhim?.slice(0, 12).map((lichChieu, index) => {
                                                        return <NavLink to={`/checkout/${lichChieu.maLichChieu}`} key={index}>
                                                            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">{moment(lichChieu.ngayChieuGioChieu).format('HH:MM')}</button>
                                                        </NavLink>
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Fragment>
                            })}
                        </TabPane>
                    })}
                </Tabs>
            </TabPane>
        })
    }


    const [state, setState] = useState({
        tabPosition: 'left',
    })

    const { tabPosition } = state;

    const changeTabPosition = e => {
        setState({ tabPosition: e.target.value });
    };



    return (
        <>
            <Tabs tabPosition={tabPosition}>
                {renderHeThongRap()};
            </Tabs>
        </>
    )
}
