import React, {useState} from 'react';
import styled from "styled-components";
import {Button} from "./components/button/Button";
import {Screen} from "./components/screen/Screen";
import {CounterSettings} from "./CounterSettings";

export const Counter: React.FC = () => {
    const minCount = 0;
    const maxCount = 5;

    const [counter, setCounter] = useState(minCount)
    const [error, setError] = useState<string | null>(null)

    const onClickIncrementHandler = () => (counter < maxCount) && setCounter(prevCount => prevCount + 1)
    const onClickResetHandler = () => setCounter(minCount)

    return (
        <StyledCounter>

            <CounterBody>
                <Screen className={counter === maxCount ? 'error' : ''} counter={counter}/>
                <Controls>
                    <Button disabled={counter === maxCount} name={'Increment'} onClick={onClickIncrementHandler}/>
                    <Button disabled={counter === minCount} name={'Reset'} onClick={onClickResetHandler}/>
                </Controls>
            </CounterBody>

            <CounterSettings/>

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

const Controls = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
`