import React from 'react';
import {S} from './Button_Styles'

type ButtonPropsType = {
    name: string
    icon?: string
    onClick: () => void
    disabled?: boolean
}

export const Button: React.FC<ButtonPropsType> = (
    {
        name,
        icon,
        onClick,
        disabled
    }
) => {
    return (
            <S.Button
                disabled={disabled}
                onClick={onClick}>
                <span className="material-symbols-outlined">{icon}</span>
                {name}
            </S.Button>
    );
};