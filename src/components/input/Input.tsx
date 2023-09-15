import React, {ChangeEvent} from 'react';
import styled from "styled-components";

type InputPropsType = {
    value: number
    label: string
    type: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    className?: string
}

export const Input: React.FC<InputPropsType> = (props) => {
    return (
        <InputWrapper>
            <label>{props.label}</label>
            <StyledInput
                value={props.value}
                type={props.type}
                onChange={props.onChange}
                className={props.className}
                />
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
  
  &:focus {
    outline: 2px solid hsla(220, 40%, 48%, 1);
    
  }
  
  &.error {
    color: hsla(340, 96%, 64%, 1);
    background: hsla(340, 96%, 64%, .1);
    outline: 2px solid hsla(340, 96%, 64%, 1);
  }
  
  
`