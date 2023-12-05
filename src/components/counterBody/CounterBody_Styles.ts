import styled from "styled-components";


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

export const S = {
    CounterBody,
    Controls
}