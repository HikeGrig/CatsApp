import {CatAction, CatActionTypes} from "../../types/cat";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchCats = (page = 1, limit = 10, category_ids = '') => {
    return async (dispatch: Dispatch<CatAction>) => {
        try {
            dispatch({type: CatActionTypes.FETCH_CATS})
            const response = await axios.get('https://api.thecatapi.com/v1/images/search', {
                params: {page: page, limit: limit, category_ids}
            })
            setTimeout(() => {
                dispatch({type: CatActionTypes.FETCH_CATS_SUCCESS, payload: response.data})
            }, 500)
        } catch (e) {
            dispatch({
                type: CatActionTypes.FETCH_CATS_ERROR,
                payload: 'Got error, please try again'
            })
        }
    }
}

export const loadMore = (page = 1, limit = 10, category_ids = '') => {
    return async (dispatch: Dispatch<CatAction>) => {
        try {
            dispatch({type: CatActionTypes.FETCH_MORE_CATS})
            const response = await axios.get('https://api.thecatapi.com/v1/images/search', {
                params: {page: page, limit: limit, category_ids}
            })
            setTimeout(() => {
                dispatch({type: CatActionTypes.FETCH_MORE_CATS_SUCCESS, payload: response.data})
            }, 500)
        } catch (e) {
            dispatch({
                type: CatActionTypes.FETCH_CATS_ERROR,
                payload: 'Got error, please try again'
            })
        }
    }
}

export function setCatPage(page: number): CatAction {
    return {type: CatActionTypes.SET_CAT_PAGE, payload: page}
}