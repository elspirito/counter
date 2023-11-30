import {useSelector} from "react-redux";
import {AppStateType} from "../store";
import {CounterStateType} from "../../types/counter";

export const selectCounter = (state: AppStateType) => state.counter
