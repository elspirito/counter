import React, {ChangeEvent, FC, useEffect} from 'react';
import styled from "styled-components";
import {Button} from "./components/button/Button";
import {Display} from "./components/display/Display";
import {Input} from "./components/input/Input";
import {changeMaxValueAC, changeMinValueAC, errorAC, incrementAC, resetAC} from "./store/actions/counterActions";
import {useAppDispatch, useAppSelector} from "./hooks/customHooks";
import {selectCounter} from "./store/selectors/selectCounter";
import {saveState} from "./utils/localStorage-utils";

export const Counter: FC = () => {

    const dispatch = useAppDispatch()
    const counter = useAppSelector(selectCounter)
    console.log(counter)


    const incrementHandler = () => {
        dispatch(incrementAC(1))
    }
    const resetHandler = () => {
        dispatch(resetAC())
    }
    const changeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => dispatch(changeMinValueAC(Number(e.currentTarget.value)))
    const changeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => dispatch(changeMaxValueAC(Number(e.currentTarget.value)))
    const setSettingsHandler = () => {
        saveState(counter)
    }

    useEffect(() => {
        counter.minValue >= counter.maxValue
            ? dispatch(errorAC('Wrong values'))
            : dispatch(errorAC(null))
    }, [counter.minValue, counter.maxValue, counter.error]);

    return (
        <StyledCounter>

            <CounterBody>
                <Display
                    className={counter.counterValue === counter.maxValue ? 'success' : '' || counter.minValue >= counter.maxValue ? 'error' : ''}
                    counterValue={counter.counterValue}
                    error={counter.error}
                />
                <Controls>
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
                </Controls>
            </CounterBody>

            <CounterSettings>
                <small>Settings</small>
                <SettingsInputs>
                    <Input label={'Min value'}
                        value={counter.minValue}
                        className={counter.minValue < 0 || counter.maxValue <= counter.minValue ? 'error' : ''}
                        onChange={changeMinValueHandler}/>
                    <Input label={'Max value'}
                        value={counter.maxValue}
                        className={counter.minValue < 0 || counter.maxValue <= counter.minValue ? 'error' : ''}
                        onChange={changeMaxValueHandler}/>
                </SettingsInputs>
                <Button disabled={counter.minValue === 0 && counter.maxValue === 1 || counter.minValue >= counter.maxValue}
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