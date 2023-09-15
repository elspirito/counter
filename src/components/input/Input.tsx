import React from 'react';
import styled from "styled-components";

type InputPropsType = {
    label: string
    type: string
    placeholder?: string
    onChange: () => void
}

export const Input: React.FC<InputPropsType> = (props) => {
    return (
        <InputWrapper>
            <label>{props.label}</label>
            <StyledInput type={props.type} placeholder={props.placeholder} onChange={props.onChange}/>
        </InputWrapper>

    );
};


const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`


const StyledInput = styled.input`
  height: 48px;
  padding: 0 16px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  border: 0;
  background: #eee;
  
  &::placeholder {
    font-weight: normal;
    opacity: .5;
  }
  
  
`