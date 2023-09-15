import React, {useState} from 'react';
import styled from "styled-components";
import {Button} from "./components/button/Button";
import {Screen} from "./components/screen/Screen";

export const Counter: React.FC = () => {
    const minCount = 0;
    const maxCount= 5;

    let [counter, setCounter] = useState(0)
    const onClickIncrementHandler = () => counter < maxCount && setCounter(counter + 1)
    const onClickResetHandler = () => setCounter(0)

    return (
        <StyledCounter>
            <Screen counter={counter}/>
            <Controls>
                <Button name={'Increment'} onClick={onClickIncrementHandler}/>
                <Button name={'reset'} onClick={onClickResetHandler}/>
            </Controls>
        </StyledCounter>
    );
};

const StyledCounter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  gap: 24px;
  background: #fff;
  min-width: 400px;
  border-radius: 40px;
  box-shadow: 0 16px 64px hsla(0, 0%, 0%, .1);
`

const Controls = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
`