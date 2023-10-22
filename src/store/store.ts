import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";

export const rootReducer = combineReducers({
    counterReducer: counterReducer
})
export const store = createStore(rootReducer)

export type CounterRootStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store