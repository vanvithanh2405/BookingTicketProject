/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CustomCard } from '@tsamantanis/react-glassmorphism'
import { Rate } from 'antd';
import '@tsamantanis/react-glassmorphism/dist/index.css'
import '../../assets/styles/circlePercent.scss'
import './Detail.css'
// Tabs
import { Tabs, Radio, Space } from 'antd';
import { layThongTinChiTietPhim } from '../../redux/acitons/QuanLyRapAction';
import moment from 'moment';
import { NavLink } from 'react-router-dom';

const { TabPane } = Tabs;
export default function Detail(props) {

    const filmDetail = useSelector(state => state.QuanLyPhimReducer.filmDetail);
    console.log({ filmDetail })
    const dispatch = useDispatch()
    useEffect(() => {
        // lấy thông tin param từ url
        let { id } = props.match.params;

        dispatch(layThongTinChiTietPhim(id))

    }, [dispatch])


    return (
        <div style={{ backgroundImage: `url(${filmDetail.hinhAnh})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
            <CustomCard
                style={{ paddingTop: 150, minHeight: '100vh' }}
                effectColor="#fff" // required
                color="#fff" // default color is white
                blur={10} // default blur value is 10px
                borderRadius={0} // default border radius value is 10px
            >
                <div className="grid grid-cols-12">
                    <div className="col-span-5 col-start-3">
                        <div className="grid grid-cols-3">
                            <img className="col-span-1" src={filmDetail.hinhAnh} style={{ width: 200, height: 350 }} alt={filmDetail.hinhAnh} />
                            <div className="col-span-2" style={{ marginTop: '30%' }}>
                                <p className="text-sm">Ngày chiếu: {moment(filmDetail.ngayKhoiChieu).format('DD/MM/YYYY')}</p>
                                <p className="text-3xl leading-3 font-semibold">{filmDetail.tenPhim}</p>
                                <p>Mô tả: {filmDetail.moTa}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-4" style={{ marginLeft: '14rem' }}>
                        <h1 style={{ marginLeft: '18%' }} className="text-2xl text-white font-semibold">Đánh giá</h1>
                        <h1 style={{ marginLeft: '14%' }} className="text-2xl font-semibold text-yellow-600"><Rate allowHalf value={filmDetail.danhGia / 2} style={{ color: '#e08833' }} /></h1>
                        <div className={`c100 p${filmDetail.danhGia * 10} big orange`}>
                            <span>{filmDetail.danhGia * 10}%</span>
                            <div className="slice">
                                <div className="bar" />
                                <div className="fill" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="mt-10 ml-72 w-2/3 container px-5 py-5 bg-white">
                    <Tabs defaultActiveKey="1" centered>
                        <TabPane className="tab_header" tab="Lịch chiếu" key="1" style={{ minHeight: 300 }}>
                            <div >
                                <Tabs tabPosition={'left'}>
                                    {filmDetail.heThongRapChieu?.map((hThongRap, index) => {
                                        return <TabPane
                                            tab={<div className="flex flex-row items-center justify-center"><img src={hThongRap.logo} className="rounded-full w-full" style={{ width: 50 }} />
                                                <div className="text-center ml-2">
                                                    {hThongRap.tenHeThongRap}
                                                </div>
                                            </div>}
                                            key={index}>
                                            {hThongRap.cumRapChieu?.map((cumRap, index) => {
                                                return <div className="mt-10" key={index}>
                                                    <div className="flex">
                                                        <img style={{ width: 50, height: 50 }} src={cumRap.hinhAnh} />
                                                        <div className="ml-2">
                                                            <p style={{ lineHeight: 1 }} className="text-base font-semibold">{cumRap.tenCumRap}</p>
                                                            <p style={{ marginTop: 0 }}>{cumRap.diaChi}</p>
                                                        </div>
                                                    </div>
                                                    <div className="thong_tin_lich_chieu grid grid-cols-9 gap-3">
                                                        {cumRap.lichChieuPhim?.map((lichChieu, index) => {
                                                            return <NavLink to={`/checkout/${lichChieu.maLichChieu}`} key={index} className="col-span-1 ">
                                                                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">{moment(lichChieu.ngayChieuGioChieu).format('HH:MM')}</button>
                                                            </NavLink>
                                                        })}

                                                    </div>
                                                </div>
                                            })}
                                        </TabPane>
                                    })}
                                </Tabs>
                            </div>
                        </TabPane>
                        <TabPane className="tab_header" tab="Thông tin" key="2">
                            Content of Tab Pane 2
                        </TabPane>
                        <TabPane className="tab_header" tab="Đánh giá" key="3">
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                </div>


            </CustomCard>

        </div>
    )
}
