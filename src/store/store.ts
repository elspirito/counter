import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./reducers/counterReducer";
import {loadState, saveState} from "../utils/localStorage-utils";
import thunk, {ThunkDispatch} from "redux-thunk";

export const rootReducer = combineReducers({
    counter: counterReducer
})
export const store = legacy_createStore(rootReducer, loadState(), applyMiddleware(thunk))

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
})

export type AppStateType = ReturnType<typeof rootReducer>
export type AppDispatchType = ThunkDispatch<AppStateType, unknown, AnyAction>

//@ts-ignore
window.store = store