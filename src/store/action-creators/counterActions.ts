import {CounterActionsTypes} from "../../types/counter";


export const incrementAction = (step: number) => {
    return {
        type: CounterActionsTypes.INCREMENT,
        payload: step
    }
};
export const resetAction = () => {
    return {
        type: CounterActionsTypes.RESET
    }
}
export const changeMinValueAction = (minValue: number) => {
    return {
        type: CounterActionsTypes.CHANGE_MIN_VALUE,
        payload: minValue
    }
}
export const changeMaxValueAction = (maxValue: number) => {
    return {
        type: CounterActionsTypes.CHANGE_MAX_VALUE,
        payload: maxValue
    }
}
export const errorAction = (error: string | null) => {
    return {
        type: CounterActionsTypes.ERROR,
        payload: error
    }
}