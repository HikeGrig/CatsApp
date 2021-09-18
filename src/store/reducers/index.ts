import {combineReducers} from "redux";
import {catsReducer} from "./catsReducer";
import {categoryReducer} from "./categoryReducer";


export const rootReducer = combineReducers({
    cats: catsReducer,
    category: categoryReducer
})

export type RootState = ReturnType<typeof rootReducer>
