import {CategoryAction, CategoryActionTypes} from "../../types/category";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchCategories = () => {
    return async (dispatch: Dispatch<CategoryAction>) => {
        try {
            dispatch({type: CategoryActionTypes.FETCH_CATEGORIES})
            const response = await axios.get('https://api.thecatapi.com/v1/categories ')
            setTimeout(() => {
                dispatch({type: CategoryActionTypes.FETCH_CATEGORIES_SUCCESS, payload: response.data})
            }, 500)
        } catch (e) {
            dispatch({
                type: CategoryActionTypes.FETCH_CATEGORIES_ERROR,
                payload: 'Got error, please try again'
            })
        }
    }
}
