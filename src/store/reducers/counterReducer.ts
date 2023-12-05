import {CounterActions, CounterActionsTypes, CounterReducerInitialType} from "../../types/counter";

const initialState: CounterReducerInitialType = {

        counterValue: 0,
        minValue: 0,
        maxValue: 1,
        error: null

}

export const counterReducer = (state = initialState, action: CounterActions) => {
    switch (action.type) {
        case CounterActionsTypes.INCREMENT:
            return state.counterValue < state.maxValue
                ? {...state, counterValue: state.counterValue + action.payload}
                : state
        case CounterActionsTypes.RESET:
            return {...state, counterValue: state.minValue}
        case CounterActionsTypes.CHANGE_MIN_VALUE:
            return {...state, minValue: action.payload}
        case CounterActionsTypes.CHANGE_MAX_VALUE:
            return {...state, maxValue: action.payload}
        case CounterActionsTypes.ERROR:
            return {...state, error: action.payload}
        default:
            return state
    }
}