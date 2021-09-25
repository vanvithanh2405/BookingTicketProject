import { startCase } from "lodash";
import { SET_DANH_SACH_PHIM, SET_FILM_DANG_CHIEU, SET_FILM_SAP_CHIEU } from "../types/QuanLyPhimType"
import { SET_CHI_TIET_PHIM } from './../types/QuanLyRapType'


const stateDefault = {
    arrFilm: [
        {
            "maPhim": 1284,
            "tenPhim": "Cuoc chien sinh tu123",
            "biDanh": "cuoc-chien-sinh-tu123",
            "trailer": "https://www.youtube.com/embed/_rUC3-pNLyc",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/cuoc-chien-sinh-tu12_gp00.jpg",
            "moTa": "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.",
            "maNhom": "GP00",
            "ngayKhoiChieu": "2021-09-14T00:08:11.003",
            "danhGia": 5,
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
        }
    ],
    dangChieu: true,
    sapChieu: false,
    arrFilmDefault: [],

    filmDetail: {}
}


export const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_DANH_SACH_PHIM: {
            state.arrFilm = action.arrFilm;
            state.arrFilmDefault = state.arrFilm;
            return { ...state }
        }
        case SET_FILM_DANG_CHIEU: {
            state.dangChieu = !state.dangChieu;

            state.arrFilm = state.arrFilmDefault.filter(film => film.dangChieu === state.dangChieu);
            return { ...state }
        }
        case SET_FILM_SAP_CHIEU: {
            state.sapChieu = !state.sapChieu;

            state.arrFilm = state.arrFilmDefault.filter(film => film.sapChieu === state.sapChieu);
            return { ...state }
        }
        case SET_CHI_TIET_PHIM: {
            state.filmDetail = action.filmDetail;
            return {...state};
        }
        
        default: return { ...state }
    }
}