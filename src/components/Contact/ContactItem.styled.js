import styled from 'styled-components';

export const LiStyled = styled.li `
font-weight: 400;
font-size: 13px;
line-height: 1.71;
color: #0b544a;
margin-bottom:10px;
`
export const BtnStyled = styled.button `
  font-weight: 400;
  font-size: 13px;
  line-height: 1.71;
  color: #0b544a;
  justify-content: center;
  width: 60px;
  height: 30px;
  margin-left: 30px;
  border-style: solid;
  border-width: 1px;
  border-radius: 6px;
  box-shadow: 6px 6px 6px rgba(0.05, 0.05, 0.1, 0.05);
  border-color: rgba(70, 70, 84, 0.227);
  &:hover{
    border-color: tomato;
    background-color: burlywood;
    cursor: pointer;
  }
`