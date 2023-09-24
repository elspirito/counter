import React from 'react';
import styled from "styled-components";

type ScreenPropsType = {
    counter: number
    className?: string
}


export const Display: React.FC<ScreenPropsType> = (props) => {
    return (
        <StyledScreen className={props.className}>
            {<TextCounter>{props.counter}</TextCounter>}
        </StyledScreen>
    );

};

const StyledScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background: #eee;
  border-radius: 8px;
  width: 100%;

  &.error {
    color: hsla(340, 96%, 64%, 1);
    background: hsla(340, 96%, 64%, .1);
    outline: 2px solid hsla(340, 96%, 64%, 1);
  }
`
const TextCounter = styled.h1`
  font-size: 32px;
  font-weight: bold;
`