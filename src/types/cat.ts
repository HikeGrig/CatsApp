export interface CatState {
    cats: any[];
    loading: boolean;
    loadingMore: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export enum CatActionTypes {
    FETCH_CATS = 'FETCH_CATS',
    FETCH_CATS_SUCCESS = 'FETCH_CATS_SUCCESS',
    FETCH_CATS_ERROR = 'FETCH_CATS_ERROR',
    FETCH_MORE_CATS = 'FETCH_MORE_CATS',
    FETCH_MORE_CATS_SUCCESS = 'FETCH_MORE_CATS_SUCCESS',
    SET_CAT_PAGE = 'SET_CAT_PAGE'
}
interface FetchCatsAction {
    type: CatActionTypes.FETCH_CATS;
}
interface FetchCatsSuccessAction {
    type: CatActionTypes.FETCH_CATS_SUCCESS;
    payload: any[]
}
interface FetchCatsErrorAction {
    type: CatActionTypes.FETCH_CATS_ERROR;
    payload: string;
}
interface FetchMoreCatsAction {
    type: CatActionTypes.FETCH_MORE_CATS;
}
interface FetchMoreCatsSuccessAction {
    type: CatActionTypes.FETCH_MORE_CATS_SUCCESS;
    payload: any[]
}
interface SetCatPage {
    type: CatActionTypes.SET_CAT_PAGE;
    payload: number;
}
export type CatAction = 
    FetchCatsAction 
    | FetchCatsErrorAction 
    | FetchCatsSuccessAction 
    | FetchMoreCatsAction 
    | FetchMoreCatsSuccessAction 
    | SetCatPage
