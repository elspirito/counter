import React from 'react';
import styled from "styled-components";

type ButtonPropsType = {
    name: string
    onClick: () => void
    disabled?: boolean
}

export const Button: React.FC<ButtonPropsType> = (props) => {
    return (
        <StyledButton disabled={props.disabled} onClick={props.onClick}>
            {props.name}
        </StyledButton>
    );
};

const StyledButton = styled.button`
  border: 0;
  background: hsla(220, 8%, 32%, 1);
  height: 48px;
  border-radius: 8px;
  color: #eee;
  font-size: 16px;
  width: 100%;
  cursor: pointer;

  &:hover {
    background: hsl(220, 40%, 48%, 1);
  }
  
  &:active {
    background: hsl(220, 40%, 40%, 1);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background: hsl(220, 8%, 32%, 1);
  }
`