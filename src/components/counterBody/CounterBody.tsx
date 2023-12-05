import React, {useEffect} from 'react';
import {Button} from "../button/Button";
import {Display} from "../display/Display";
import {errorAC, incrementAC, resetAC} from "../../store/actions/counterActions";
import {useAppDispatch, useAppSelector} from "../../hooks/customHooks";
import {selectCounter} from "../../store/selectors/selectCounter";
import {S} from './CounterBody_Styles'

export const CounterBody = () => {
    const dispatch = useAppDispatch()
    const counter = useAppSelector(selectCounter)

    const incrementHandler = () => {
        dispatch(incrementAC(1))
    }
    const resetHandler = () => {
        dispatch(resetAC())
    }

    useEffect(() => {
        counter.minValue >= counter.maxValue
            ? dispatch(errorAC('Wrong values'))
            : dispatch(errorAC(null))
    }, [counter.minValue, counter.maxValue, counter.error]);

    return (
        <S.CounterBody>
            <Display
                className={counter.counterValue === counter.maxValue ? 'success' : '' || counter.minValue >= counter.maxValue ? 'error' : ''}
                counterValue={counter.counterValue}
                error={counter.error}
            />
            <S.Controls>
                <Button
                    icon={'add_circle'}
                    disabled={counter.counterValue === counter.maxValue || counter.minValue >= counter.maxValue}
                    name={'Increment'}
                    onClick={incrementHandler}/>
                <Button
                    icon={'restart_alt'}
                    disabled={counter.counterValue === counter.minValue || counter.minValue >= counter.maxValue}
                    name={'Reset'}
                    onClick={resetHandler}/>
            </S.Controls>
        </S.CounterBody>
    );
};
