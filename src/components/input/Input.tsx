import React, {ChangeEvent} from 'react';
import {S} from './Input_Styles'

type InputPropsType = {
    value: number
    label: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    className?: string
}

export const Input: React.FC<InputPropsType> = (
    {
        value,
        label,
        onChange,
        className
    }
) => {
    return (
        <S.InputWrapper>
            <label>{label}</label>
            <S.Input
                value={value}
                type={'number'}
                onChange={onChange}
                className={className}
                />
        </S.InputWrapper>

    );
};