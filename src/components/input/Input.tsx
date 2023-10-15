import React, {ChangeEvent} from 'react';
import {S} from './Input_Styles'

type InputPropsType = {
    value: number
    label: string
    type: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    className?: string
}

export const Input: React.FC<InputPropsType> = (
    {
        value,
        label,
        type,
        onChange,
        className
    }
) => {
    return (
        <S.InputWrapper>
            <label>{label}</label>
            <S.Input
                value={value}
                type={type}
                onChange={onChange}
                className={className}
                />
        </S.InputWrapper>

    );
};