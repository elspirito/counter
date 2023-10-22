export type StateType = {
    counterValue: number
    minValue: number
    maxValue: number
    error: string | null
}

export enum CounterActionsTypes {
    INCREMENT = 'INCREMENT',
    RESET = 'RESET',
    CHANGE_MIN_VALUE = 'CHANGE_MIN_VALUE',
    CHANGE_MAX_VALUE = 'CHANGE_MAX_VALUE',
    ERROR = 'ERROR',
}

type IncrementActionType = {
    type: CounterActionsTypes.INCREMENT
    payload: number
}
type DecrementActionType = {
    type: CounterActionsTypes.RESET
}
type ChangeMinValueActionType = {
    type: CounterActionsTypes.CHANGE_MIN_VALUE
    payload: number
}
type ChangeMaxValueActionType = {
    type: CounterActionsTypes.CHANGE_MAX_VALUE
    payload: number
}
type ErrorActionType = {
    type: CounterActionsTypes.ERROR
    payload: null | string
}

export type CounterActions = IncrementActionType
    | DecrementActionType
    | ChangeMinValueActionType
    | ChangeMaxValueActionType
    | ErrorActionType

