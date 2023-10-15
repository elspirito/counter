import React from 'react';
import {S} from './Display_Styles'

type DisplayPropsType = {
    counterValue: number
    error: string | null
    className?: string
}


export const Display: React.FC<DisplayPropsType> = (
    {
        className,
        counterValue,
        error
    }
) => {
    return (
        <S.Screen className={className}>
            <S.TextCounter>
                {error !== null ? error : counterValue}
            </S.TextCounter>
        </S.Screen>
    );

};