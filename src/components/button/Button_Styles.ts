import styled from "styled-components";

const Button = styled.button`
  border: 0;
  background: hsla(220, 8%, 32%, 1);
  height: 48px;
  border-radius: 8px;
  color: #eee;
  font-size: 16px;
  width: 100%;
  cursor: pointer;
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  

  &:hover {
    background: hsla(220, 40%, 48%, 1);
  }

  &:active {
    background: hsla(220, 40%, 40%, 1);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background: hsla(220, 8%, 32%, 1);
  }
`

export const S = {
    Button
}