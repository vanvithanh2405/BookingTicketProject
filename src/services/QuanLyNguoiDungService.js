/* eslint-disable no-useless-constructor */
// Đây là file quản lý những api trả về
import { GROUP_ID } from "../util/settings/config";
import { baseService } from "./baseService"


export class QuanLyNguoiDungService extends baseService {


    constructor() {
        super();
    }

    dangNhap = (thongTinDangNhap) => { // {taiKhoan: '',matKhau: ''}
        return this.post(`api/QuanLyNguoiDung/DangNhap`,thongTinDangNhap);
    }

    layThongTinNguoiDung = () => {
        return this.post(`api/QuanLyNguoiDung/ThongTinTaiKhoan`)
    }

   
}

export const qlNguoiDungService = new QuanLyNguoiDungService();