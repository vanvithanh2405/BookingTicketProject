
// Đây là file quản lý những api trả về
import { GROUP_ID } from "../util/settings/config";
import { baseService } from "./baseService"


export class QuanLyPhimService extends baseService {


    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
    }

    layDanhSachBanner = () => {
        return this.get(`/api/QuanLyPhim/LayDanhSachBanner`);
    }

    layDanhSachPhim = () => {
        return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`)
    }
}

export const qlPhimService = new QuanLyPhimService();