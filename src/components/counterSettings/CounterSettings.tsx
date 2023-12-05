import React, {ChangeEvent} from 'react';
import {Input} from "../input/Input";
import {Button} from "../button/Button";
import {changeMaxValueAC, changeMinValueAC} from "../../store/actions/counterActions";
import {saveState} from "../../utils/localStorage-utils";
import {useAppDispatch, useAppSelector} from "../../hooks/customHooks";
import {selectCounter} from "../../store/selectors/selectCounter";
import {S} from './CounterSettings_Styles'

export const CounterSettings = () => {
    const dispatch = useAppDispatch()
    const counter = useAppSelector(selectCounter)

    const changeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => dispatch(changeMinValueAC(Number(e.currentTarget.value)))
    const changeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => dispatch(changeMaxValueAC(Number(e.currentTarget.value)))
    const setSettingsHandler = () => {
        saveState(counter)
    }

    return (
        <S.CounterSettings>
            <small>Settings</small>
            <S.SettingsInputs>
                <Input label={'Min value'}
                       value={counter.minValue}
                       className={counter.minValue < 0 || counter.maxValue <= counter.minValue ? 'error' : ''}
                       onChange={changeMinValueHandler}/>
                <Input label={'Max value'}
                       value={counter.maxValue}
                       className={counter.minValue < 0 || counter.maxValue <= counter.minValue ? 'error' : ''}
                       onChange={changeMaxValueHandler}/>
            </S.SettingsInputs>
            <Button disabled={counter.minValue === 0 && counter.maxValue === 1 || counter.minValue >= counter.maxValue}
                    icon={'check'}
                    name={'Set settings'}
                    onClick={setSettingsHandler}/>
        </S.CounterSettings>
    );
};
