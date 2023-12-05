import React, {ChangeEvent, FC, useEffect} from 'react';
import styled from "styled-components";
import {Button} from "./components/button/Button";
import {Display} from "./components/display/Display";
import {Input} from "./components/input/Input";
import {changeMaxValueAC, changeMinValueAC, errorAC, incrementAC, resetAC} from "./store/actions/counterActions";
import {useAppDispatch, useAppSelector} from "./hooks/customHooks";
import {selectCounter} from "./store/selectors/selectCounter";
import {saveState} from "./utils/localStorage-utils";
import {CounterBody} from "./components/counterBody/CounterBody";
import {CounterSettings} from "./components/counterSettings/CounterSettings";

export const Counter: FC = () => {





    return (
        <StyledCounter>
            <CounterBody/>
            CounterSettings/
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


