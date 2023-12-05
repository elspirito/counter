import {CounterReducerInitialType} from "../types/counter";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('counterState')
        if (serializedState === null) {
            return undefined
        }
        const state = {
            counter: JSON.parse(serializedState)
        }
        return state
    } catch (err) {
        return undefined
    }
}

export const saveState = (counter: CounterReducerInitialType) => {
    try {
        const serializedState = JSON.stringify(counter)
        localStorage.setItem('counterState', serializedState)
    } catch {
        //ignore write errors
    }
}