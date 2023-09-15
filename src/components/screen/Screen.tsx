import React from 'react';
import styled from "styled-components";

type ScreenPropsType = {
    counter: number
    className?: string
}


export const Screen: React.FC<ScreenPropsType> = (props) => {
    return (
        <StyledScreen className={props.className}>
            <CounterNumber>{props.counter}</CounterNumber>
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
  }
`
const CounterNumber = styled.h1`
  font-size: 40px;
  font-weight: bold;
`