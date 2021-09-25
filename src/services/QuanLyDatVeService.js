/* eslint-disable no-useless-constructor */

import { GROUP_ID } from "../util/settings/config";
import { ThongTinDatVe } from "../_core/models/ThongTinDatVe";
import { baseService } from "./baseService"


export class QuanLyDatVeService extends baseService {


    constructor() {
        super();
    }

    layChiTietPhongVe = (maLichChieu) => { // maLichChieu lấy từ url
        return this.get(`api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`);
    }


    /* thongTinDatVe = {"maLichChieu": 0,
        "danhSachVe": [
        {
            "maGhe": 0,
            "giaVe": 0
        }
    } */
    datVe = (thongTinDatVe = new ThongTinDatVe) => { 
        return this.post(`api/QuanLyDatVe/DatVe`,thongTinDatVe);
    }
    

}

export const qlDatVeService = new QuanLyDatVeService();