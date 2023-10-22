import React, {ChangeEvent, useEffect, useState} from 'react';
import styled from "styled-components";
import {Button} from "./components/button/Button";
import {Display} from "./components/display/Display";
import {Input} from "./components/input/Input";
import {useDispatch, useSelector} from "react-redux";
import {CounterRootStateType} from "./store/store";
import {StateType} from "./types/counter";
import {
    changeMaxValueAction,
    changeMinValueAction, errorAction,
    incrementAction,
    resetAction
} from "./store/action-creators/counterActions";

export const Counter: React.FC = () => {

    const state = useSelector<CounterRootStateType, StateType>(state => state.counterReducer)
    console.log(state)
    const dispatch = useDispatch()

    const [error, setError] = useState<string | null>(null)

    const incrementHandler = () => {
        dispatch(incrementAction(1))
    }
    const resetHandler = () => {
        dispatch(resetAction())
    }
    const changeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => dispatch(changeMinValueAction(Number(e.currentTarget.value)))
    const changeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => dispatch(changeMaxValueAction(Number(e.currentTarget.value)))
    const setSettingsHandler = () => {
        // localStorage.setItem("minValue", JSON.stringify(minValue))
        // localStorage.setItem("maxValue", JSON.stringify(maxValue))
        // setCounterValue(minValue)
    }

    // useEffect(() => {
    //     let localStoreMinValue = localStorage.getItem('minValue')
    //     if (localStoreMinValue) {
    //         setMinValue(JSON.parse(localStoreMinValue))
    //         setCounterValue(JSON.parse(localStoreMinValue))
    //     }
    //     let localStoreMaxValue = localStorage.getItem('maxValue')
    //     localStoreMaxValue && setMaxValue(JSON.parse(localStoreMaxValue))
    // }, [])

    useEffect(() => {
        state.minValue >= state.maxValue
            ? dispatch(errorAction('Wrong values'))
            : dispatch(errorAction(null))
    }, [state.minValue, state.maxValue, state.error]);

    return (
        <StyledCounter>

            <CounterBody>
                <Display
                    className={state.counterValue === state.maxValue ? 'success' : '' || state.minValue >= state.maxValue ? 'error' : ''}
                    counterValue={state.counterValue}
                    error={state.error}
                />
                <Controls>
                    <Button
                        icon={'add_circle'}
                        disabled={state.counterValue === state.maxValue || state.minValue >= state.maxValue}
                        name={'Increment'}
                        onClick={incrementHandler}/>
                    <Button
                        icon={'restart_alt'}
                        disabled={state.counterValue === state.minValue || state.minValue >= state.maxValue}
                        name={'Reset'}
                        onClick={resetHandler}/>
                </Controls>
            </CounterBody>

            <CounterSettings>
                <small>Settings</small>
                <SettingsInputs>
                    <Input label={'Min value'}
                        value={state.minValue}
                        className={state.minValue < 0 || state.maxValue <= state.minValue ? 'error' : ''}
                        onChange={changeMinValueHandler}/>
                    <Input label={'Max value'}
                        value={state.maxValue}
                        className={state.minValue < 0 || state.maxValue <= state.minValue ? 'error' : ''}
                        onChange={changeMaxValueHandler}/>
                </SettingsInputs>
                <Button disabled={state.minValue === 0 && state.maxValue === 1 || state.minValue >= state.maxValue}
                        icon={'check'}
                        name={'Set settings'}
                        onClick={setSettingsHandler}/>
            </CounterSettings>

        </StyledCounter>
    );
};

const StyledCounter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  min-width: 400px;
`

const CounterBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 24px;
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 16px 64px hsla(0, 0%, 0%, .1);
  width: 100%;
`

const CounterSettings = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: #fff;
  padding: 24px;
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 16px 64px hsla(0, 0%, 0%, .1);

  small {
    color: hsla(0, 0%, 0%, .6);
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    padding: 0 4px;
  }
`

const Controls = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
`

const SettingsInputs = styled.div`
  display: flex;
  gap: 8px;
`