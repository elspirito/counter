import styled from "styled-components";

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background: #eee;
  border-radius: 8px;
  width: 100%;

  &.success {
    color: hsla(150, 96%, 40%, 1);
    background: hsla(150, 96%, 40%, .1);
    outline: 2px solid hsla(150, 96%, 40%, 1);
  }

  &.error {
    color: hsla(340, 96%, 64%, 1);
    background: hsla(340, 96%, 64%, .1);
    outline: 2px solid hsla(340, 96%, 64%, 1);
  }
`
const TextCounter = styled.h1`
  font-size: 32px;
  font-weight: bold;
`

export const S = {
    Screen,
    TextCounter
}