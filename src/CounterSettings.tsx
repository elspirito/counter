import React from 'react';
import styled from "styled-components";
import {Input} from "./components/input/Input";
import {Button} from "./components/button/Button";

export const CounterSettings: React.FC = () => {
    return (
        <StyledSettings>
            <small>Settings</small>

            <SettingsInputs>
                <Input label={'Min value'} type={'number'} placeholder={'0'} onChange={() => {
                }}/>
                <Input label={'Max value'} type={'number'} placeholder={'0'} onChange={() => {
                }}/>
            </SettingsInputs>

            <Button name={'Set'} onClick={() => {
            }}/>
        </StyledSettings>
    );
};

const StyledSettings = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: #fff;
  padding: 24px;
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 16px 64px hsla(0, 0%, 0%, .1);

  small {
    color: hsla(0, 0%, 0%, .6);
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    padding: 0 4px;
  }

`
const SettingsInputs = styled.div`
  display: flex;
  gap: 8px;
`