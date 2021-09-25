// import axios from "axios";
// import { DOMAIN } from "../../util/settings/config";
import { SET_CAROUSEL } from "../types/CarouselType";
import { qlPhimService } from "../../services/QuanLyPhimService";
export const getCarouselAction = () => {
    return async (dispatch) => {
        try {
            const result = await qlPhimService.layDanhSachBanner();
            // đưa lên reducer
            console.log('result', result);
            dispatch({ // đây là action
                type: SET_CAROUSEL,
                arrImg: result.data.content
            })
        } catch (errors) {
            console.log('errors', errors)
        }
    }
}