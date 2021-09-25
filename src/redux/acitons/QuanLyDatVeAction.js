import { ThongTinDatVe } from '../../_core/models/ThongTinDatVe';
import { CHUYEN_TAB, DAT_VE_HOAN_TAT, SET_CHI_TIET_PHONG_VE } from '../types/QuanLyDatVeType';
import { qlDatVeService } from './../../services/QuanLyDatVeService'
import { displayLoadingAction, hideLoadingAciton } from './LoadingAction';


export const LayChiTietPhongVeAction = (maLichChieu) => {

    return async dispatch => {
        try {
            const result = await qlDatVeService.layChiTietPhongVe(maLichChieu);

            console.log('result', result)
            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_CHI_TIET_PHONG_VE,
                    chiTietPhongVe: result.data.content
                })
            }
        } catch (errors) {
            console.log('errors', errors)
            console.log('errors', errors.response?.data)
        }
    }
}


export const DatVeAction = (thongTinDatVe = new ThongTinDatVe) => {

    return async dispatch => {
        try {
            // loading và cb thực hiện action
            dispatch(displayLoadingAction)

            const result = await qlDatVeService.datVe(thongTinDatVe);
            console.log('result', result.data.content);
            // Đặt vé thành công gọi api load lại phòng vé
            await dispatch(LayChiTietPhongVeAction(thongTinDatVe.maLichChieu));

            // đặt vé xong sẽ hoàn tất cái quá trình đặt vé 
            await dispatch({
                type: DAT_VE_HOAN_TAT
            })


            // khi chạy xong sẽ tắt loading
            await dispatch(hideLoadingAciton)

            //Chuyển tab
            dispatch({type:CHUYEN_TAB});
            
        } catch (errors) {

            dispatch({
                type: 'HIDE_LOADING'
            })
            console.log('errors', errors.response?.data)
        }
    }
}