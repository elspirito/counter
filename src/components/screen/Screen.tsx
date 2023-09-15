import React from 'react';
import styled from "styled-components";

type ScreenPropsType = {
    counter: number
}

export const Screen: React.FC<ScreenPropsType> = (props) => {
    return (
        <StyledScreen>
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
  border-radius: 16px;
  width: 100%;
`
const CounterNumber = styled.h1`
  font-size: 40px;
  font-weight: bold;
`