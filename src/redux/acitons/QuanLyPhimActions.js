import { qlPhimService } from "../../services/QuanLyPhimService"
import { SET_DANH_SACH_PHIM } from "../types/QuanLyPhimType";




export const layDanhSachPhimAction = () => {

    return async (dispatch) => {
        try {
            const result = await qlPhimService.layDanhSachPhim();

            dispatch({
                type: SET_DANH_SACH_PHIM,
                arrFilm: result.data.content
            })
        } catch (errors) {
            console.log('errors', errors)
        }
    }
}