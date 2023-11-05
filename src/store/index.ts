import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";

export const rootReducer = combineReducers({
    counterReducer
})
export const store = createStore(rootReducer)

export type RootStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store