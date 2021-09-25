import { qlNguoiDungService } from "../../services/QuanLyNguoiDungService"
import { DANG_NHAP_ACTION, SET_THONG_TIN_NGUOI_DUNG } from "../types/QuanLyNguoiDungType";
import { history } from './../../App'




export const dangNhapAction = (thongTinDangNhap) => {


    return async (dispatch) => {
        try {
            const result = await qlNguoiDungService.dangNhap(thongTinDangNhap);
            if (result.data.statusCode === 200) {
                dispatch({
                    type: DANG_NHAP_ACTION,
                    thongTinDangNhap: result.data.content
                })
                // chuyen huong ve trang truoc do 
                history.goBack()
            }
            
            console.log('result', result)
        } catch (error) {
            console.log('errors', error.response.data)
        }
    }
}

export const layThongTinNguoiDungAction = () => {


    return async (dispatch) => {
        try {
            const result = await qlNguoiDungService.layThongTinNguoiDung();
            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_THONG_TIN_NGUOI_DUNG,
                    thongTinNguoiDung: result.data.content
                })
            }
            
            console.log('result', result)
        } catch (error) {
            console.log('errors', error.response.data)
        }
    }
}