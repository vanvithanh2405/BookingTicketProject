/* eslint-disable no-useless-constructor */



import { GROUP_ID } from "../util/settings/config";
import { baseService } from "./baseService"


export class QuanLyRapService extends baseService {
    constructor() {
        super();
    }

    layDanhSachHeThongRap = () => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID}`);
    }

    layThongTinLichChieuPhim = (maPhim) => {
        return this.get(`api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`);
    }

}

export const qlRapService = new QuanLyRapService();