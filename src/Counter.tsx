import React, {ChangeEvent, useEffect, useState} from 'react';
import styled from "styled-components";
import {Button} from "./components/button/Button";
import {Display} from "./components/display/Display";
import {Input} from "./components/input/Input";

export const Counter: React.FC = () => {

    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(1)
    const [counter, setCounter] = useState(minValue)
    const [error, setError] = useState(null)


    const onClickIncrementHandler = () => (counter < maxValue) && setCounter(prevCount => prevCount + 1)
    const onClickResetHandler = () => setCounter(minValue)
    const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => setMinValue(Number(e.currentTarget.value))
    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => setMaxValue(Number(e.currentTarget.value))
    const onClickSetHandler = () => {
        localStorage.setItem("minValue", JSON.stringify(minValue))
        localStorage.setItem("maxValue", JSON.stringify(maxValue))
    }

    useEffect(() => {
        let localStoreMinValue = localStorage.getItem('minValue')
        localStoreMinValue && setMinValue(JSON.parse(localStoreMinValue))
        let localStoreMaxValue = localStorage.getItem('maxValue')
        localStoreMaxValue && setMaxValue(JSON.parse(localStoreMaxValue))
    }, [])

    return (
        <StyledCounter>

            <CounterBody>
                <Display
                    className={counter === maxValue ? 'error' : ''}
                    counter={counter}
                />
                <Controls>
                    <Button
                        disabled={counter === maxValue}
                        name={'Increment'}
                        onClick={onClickIncrementHandler}/>
                    <Button
                        disabled={counter === minValue}
                        name={'Reset'}
                        onClick={onClickResetHandler}/>
                </Controls>
            </CounterBody>

            <CounterSettings>
                <small>Settings</small>
                <SettingsInputs>
                    <Input
                        value={minValue}
                        className={minValue < 0 || maxValue <= minValue ? 'error' : ''}
                        label={'Min value'}
                        type={'number'}
                        onChange={onChangeMinValueHandler}/>
                    <Input
                        value={maxValue}
                        className={minValue < 0 || maxValue <= minValue ? 'error' : ''}
                        label={'Max value'}
                        type={'number'}
                        onChange={onChangeMaxValueHandler}/>
                </SettingsInputs>
                <Button name={'Set'} onClick={onClickSetHandler}/>
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