import {CatAction, CatActionTypes, CatState} from "../../types/cat";

const initialState: CatState = {
    cats: [],
    page: 1,
    error: null,
    limit: 10,
    loading: false,
    loadingMore: false,
}

export const catsReducer = (state = initialState, action: CatAction): CatState => {
    switch (action.type) {
        case CatActionTypes.FETCH_CATS:
            return {...state, loading: true}
        case CatActionTypes.FETCH_CATS_SUCCESS:
            return {...state, loading: false, cats: action.payload}
        case CatActionTypes.FETCH_MORE_CATS:
            return {...state, loadingMore: true}
        case CatActionTypes.FETCH_MORE_CATS_SUCCESS:
            return {...state, loadingMore: false, cats: [...state.cats, ...action.payload]}
        case CatActionTypes.FETCH_CATS_ERROR:
            return {...state, loading: false, error: action.payload}
        case CatActionTypes.SET_CAT_PAGE:
            return {...state, page: action.payload}
        default:
            return state
        
    }
}
