import React, {ChangeEvent, useEffect, useState} from 'react';
import styled from "styled-components";
import {Button} from "./components/button/Button";
import {Display} from "./components/display/Display";
import {Input} from "./components/input/Input";

export const Counter: React.FC = () => {

    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(1)
    const [counterValue, setCounterValue] = useState(minValue)
    const [error, setError] = useState<string | null>(null)

    const onClickIncrementHandler = () => (counterValue < maxValue) && setCounterValue(prevCount => prevCount + 1)
    const onClickResetHandler = () => setCounterValue(minValue)
    const onChangeMinValueInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(Number(e.currentTarget.value))
    }
    const onChangeMaxValueInputHandler = (e: ChangeEvent<HTMLInputElement>) => setMaxValue(Number(e.currentTarget.value))
    const onClickSetSettingsHandler = () => {
        localStorage.setItem("minValue", JSON.stringify(minValue))
        localStorage.setItem("maxValue", JSON.stringify(maxValue))
        setCounterValue(minValue)
    }


    useEffect(() => {
        let localStoreMinValue = localStorage.getItem('minValue')
        if (localStoreMinValue) {
            setMinValue(JSON.parse(localStoreMinValue))
            setCounterValue(JSON.parse(localStoreMinValue))
        }
        let localStoreMaxValue = localStorage.getItem('maxValue')
        localStoreMaxValue && setMaxValue(JSON.parse(localStoreMaxValue))
    }, [])

    useEffect(() => {
        minValue >= maxValue ? setError('Wrong values') : setError(null)
    }, [minValue, maxValue, error]);

    return (
        <StyledCounter>

            <CounterBody>
                <Display
                    className={counterValue === maxValue ? 'success' : '' || minValue >= maxValue ? 'error' : ''}
                    counterValue={counterValue}
                    error={error}
                />
                <Controls>
                    <Button
                        icon={'add_circle'}
                        disabled={counterValue === maxValue || minValue >= maxValue}
                        name={'Increment'}
                        onClick={onClickIncrementHandler}/>
                    <Button
                        icon={'restart_alt'}
                        disabled={counterValue === minValue || minValue >= maxValue}
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
                        onChange={onChangeMinValueInputHandler}/>
                    <Input
                        value={maxValue}
                        className={minValue < 0 || maxValue <= minValue ? 'error' : ''}
                        label={'Max value'}
                        type={'number'}
                        onChange={onChangeMaxValueInputHandler}/>
                </SettingsInputs>
                <Button disabled={minValue === 0 && maxValue === 1 || minValue >= maxValue} icon={'check'}
                        name={'Set settings'} onClick={onClickSetSettingsHandler}/>
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