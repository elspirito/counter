import {CounterActionsTypes} from "../../types/counter";


export const incrementAC = (step: number) => {
    return {
        type: CounterActionsTypes.INCREMENT,
        payload: step
    }
};
export const resetAC = () => {
    return {
        type: CounterActionsTypes.RESET
    }
}
export const changeMinValueAC = (minValue: number) => {
    return {
        type: CounterActionsTypes.CHANGE_MIN_VALUE,
        payload: minValue
    }
}
export const changeMaxValueAC = (maxValue: number) => {
    return {
        type: CounterActionsTypes.CHANGE_MAX_VALUE,
        payload: maxValue
    }
}
export const errorAC = (error: string | null) => {
    return {
        type: CounterActionsTypes.ERROR,
        payload: error
    }
}