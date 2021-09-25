/* eslint-disable import/no-anonymous-default-export */
import _, { startCase } from 'lodash'
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DatVeAction, LayChiTietPhongVeAction } from '../../redux/acitons/QuanLyDatVeAction';
import { DAT_VE } from './../../redux/types/QuanLyDatVeType'
import { ThongTinDatVe } from './../../_core/models/ThongTinDatVe'
// Css
import checkoutStyle from './Checkout.module.css';
import './Checkout.css'

// Antd
import { UserOutlined, CloseOutlined, CheckOutlined } from '@ant-design/icons'

import { Tabs, TimePicker } from 'antd';
import { layThongTinNguoiDungAction } from '../../redux/acitons/QuanLyNguoiDungAction';
import moment from 'moment';
import { NavLink } from 'react-router-dom';




function Checkout(props) {

    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);

    const { chiTietPhongVe, danhSachGheDangDat } = useSelector(state => state.QuanLyDatVeReducer);


    const dispatch = useDispatch();

    useEffect(() => {
        // Gọi hàm tạo ra một async function
        const action = LayChiTietPhongVeAction(props.match.params.id);
        // sau đó dispatch function này đi 
        dispatch(action);
    }, [])

    console.log({ chiTietPhongVe });


    const { thongTinPhim, danhSachGhe } = chiTietPhongVe

    const renderSeats = () => {
        return danhSachGhe.map((ghe, index) => {

            let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : '';
            let classGheDaDat = ghe.daDat === true ? 'gheDaDat' : '';

            let classGheDangDat = '';

            let indexGheDD = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe);

            let classGheDaDuocDat = '';

            if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
                classGheDaDuocDat = 'gheDaDuocDat';
            }

            if (indexGheDD != -1) {
                classGheDangDat = 'gheDangDat';
            }



            return <Fragment key={index}>
                <button onClick={() => {
                    dispatch({
                        type: DAT_VE,
                        gheDuocChon: ghe
                    })
                }} disabled={ghe.daDat} className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classGheDaDuocDat} text-center `} key={index}>
                    {ghe.daDat ? classGheDaDuocDat != '' ? <UserOutlined style={{ marginBottom: 5.5 }} /> : <CloseOutlined style={{ marginBottom: 5.5 }} /> : ghe.stt}
                </button>


                {/* Chia một cột là 16 ghế  */}
                {(index + 1) % 16 === 0 ? <br /> : ''}
            </Fragment>
        })
    }
    return (
        <div className="container-fluid min-h-screen">
            <div className="grid grid-cols-12">
                <div className="col-span-9">
                    <div className="flex flex-col items-center mt-5">

                        <div className="bg-black" style={{ width: '80%', height: 15 }}>

                        </div>
                        <div className={`${checkoutStyle['trapezoid']}`}></div>

                        <div className={`${checkoutStyle['manHinh']} text-base`}>
                            <h3>Màn hình</h3>
                        </div>
                        <div>
                            {renderSeats()}
                        </div>
                    </div>

                    <div className="mt-5 flex justify-center">
                        <table className=" divide-y divide-gray-200 w-2/3">
                            <thead className="bg-gray-50 p-5 text-center ">
                                <tr>
                                    <th>Ghế chưa đặt</th>
                                    <th>Ghế đang đặt</th>
                                    <th>Ghế vip</th>
                                    <th>Ghế đã đặt</th>
                                    <th>Ghế mình đặt</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 text-center">
                                <tr>
                                    <td><button className="ghe text-center"> <CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> </button> </td>
                                    <td><button className="ghe gheDangDat text-center"> <CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /></button> </td>
                                    <td><button className="ghe gheVip text-center"><CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /></button> </td>
                                    <td><button className="ghe gheDaDat text-center"> <CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> </button> </td>
                                    <td><button className="ghe gheDaDuocDat text-center"> <CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> </button> </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-span-3">
                    <h3 className="text-center text-2xl text-green-400">
                        {danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                            return tongTien += ghe.giaVe;
                        }, 0).toLocaleString()} <span>VND</span>
                    </h3>
                    <hr />
                    <h3 className="text-2xl my-3">{thongTinPhim.tenPhim}</h3>
                    <p className="text-base">Địa điểm: {thongTinPhim.tenCumRap}</p>
                    <p className="text-base">Ngày chiếu : <span className="font-semibold">{thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu} - {thongTinPhim.tenRap}</span></p>
                    <hr />
                    <div className="grid grid-cols-2 my-3">
                        <div>
                            <span className="text-red-400 text-xl font-semibold">Ghế: </span>
                            {_.sortBy(danhSachGheDangDat, ['stt']).map((gheDD, index) => {
                                return <span key={index} className="text-green-500 text-xl mr-2">{gheDD.stt}</span>
                            })}
                        </div>
                        <div className="text-right">
                            <span className="text-green-400 text-xl font-semibold">
                                {danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                                    return tongTien += ghe.giaVe;
                                }, 0).toLocaleString()} <label>VND</label>
                            </span>
                        </div>
                    </div>
                    <hr />
                    <div className="text-lg my-3">
                        <i>Email: </i> <br />
                        {userLogin.email}
                    </div>
                    <div className="text-lg my-3">
                        <i>Phone: </i> <br />
                        {userLogin.soDT}
                    </div>
                    <hr />
                    <div className="mb-0 h-full flex flex-col items-center" style={{ marginBottom: 0 }} >
                        <div onClick={() => {
                            const thongTinDatVe = new ThongTinDatVe();
                            thongTinDatVe.maLichChieu = props.match.params.id;
                            thongTinDatVe.danhSachVe = danhSachGheDangDat;

                            console.log('thongTinDatVe', thongTinDatVe);
                            const action = DatVeAction(thongTinDatVe);
                            dispatch(action)

                        }} className="bg-green-400 hover:bg-green-600 text-white w-full text-center py-3 font-semibold text-lg cursor-pointer">
                            ĐẶT VÉ
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}


const { TabPane } = Tabs;

// function callback(key) {
//     console.log(key);
// }
export default function (props) {
    
    const {tabActive} = useSelector(state=>state.QuanLyDatVeReducer)
    
    const dispatch = useDispatch()
    console.log('tabActive',tabActive)
    
    return <div className="p-5">
        <Tabs defaultActiveKey="1" activeKey={tabActive} onChange={(key)=>{
            dispatch({
                type: 'CHANGE_TAB_ACTIVE',
                number:key.toString()
            })
        }}>
            <TabPane tab="01 CHỌN GHẾ THANH TOÁN" key="1"  >
                <Checkout {...props} />
            </TabPane>
            <TabPane tab="02 KẾT QUẢ ĐẶT VÉ" key="2">
                <KetQuaDatVe {...props} />
            </TabPane>
        </Tabs>
    </div>

}

function KetQuaDatVe(props) {

    const dispatch = useDispatch();

    const { thongTinNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer);

    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);

    useEffect(() => {
        const action = layThongTinNguoiDungAction();
        dispatch(action)
    }, [])

    console.log('thongTinNguoiDung', thongTinNguoiDung)

    const renderTicketItem = () => {
        
        return thongTinNguoiDung.thongTinDatVe?.map((ticket, index) => {
            const seats = _.first(ticket.danhSachGhe)
            return <div className="p-2 lg:w-1/3 md:w-1/2 w-full text-base" key={index}>
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={ticket.hinhAnh} />
                    <div className="flex-grow">
                        <h2 className="text-gray-900 title-font font-medium text-xl">{ticket.tenPhim}</h2>
                        <p className="text-gray-500">Giờ chiếu: {moment(ticket.ngayDat).format('HH:MM')} - Ngày Chiếu: {moment(ticket.ngayDat).format('DD-MM-YYYY')} </p>
                        <span>Địa điểm: {seats.tenHeThongRap} - {seats.tenRap}</span>
                        <p>Ghế: {ticket.danhSachGhe.map((ghe,index)=>{
                            return <span key={index} className="mr-2">[{ghe.tenGhe}]</span>
                        })}</p>
                    </div>
                </div>
            </div>
        })
    }

    return <section className="text-gray-600 body-font">
        <div className="container px-2 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
                <h1 className="text-4xl font-medium title-font mb-4 text-purple-600 ">Lịch sử đặt vé khách hàng</h1>
                <i className="lg:w-2/3 mx-auto leading-relaxed text-xl font-semibold">Hãy xem thông tin địa chỉ, suất chiếu và thời gian để trải nghiệm phim một cách tốt nhất nhé !</i>
            </div>
            <div className="flex flex-wrap -m-2">
                {renderTicketItem()}
            </div>
        </div>
    </section>

}


