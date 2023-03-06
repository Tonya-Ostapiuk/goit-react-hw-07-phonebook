import styled from 'styled-components';

export const FormStyled = styled.form `
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 200px;
    margin-left: 22px;
    border-style: solid;
    border-width: 1px;
    border-radius: 4px;
    box-shadow: 6px 6px 6px rgba(0.05, 0.05, 0.1, 0.05);
    border-color: rgba(70, 70, 84, 0.227);
`
export const LabelStyled = styled.label `
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: 13px;
  line-height: 1.71;
  margin-left: 20px;
  margin-top: 9px;
  color: #0b544a;
 
`
export const InputStyled = styled.input `
    width: 120px;
    height: 20px;
  
    margin-left: 20px;
    margin-bottom: 10px;
    margin-top: 4px;
    border-style: solid;
    border-width: 1px;
    border-radius: 3px;
   
    border-color: rgba(70, 70, 84, 0.227);
    &:focus{
        box-shadow: 6px 6px 6px rgba(0.05, 0.05, 0.1, 0.05);
        border: 1px solid #a9d1de;
        outline: none;
    
  }
    
`
export const BtnStyled = styled.button `
  font-weight: 400;
  font-size: 13px;
  line-height: 1.71;
  color: #0b544a;
  justify-content: center;
  width: 120px;
  height: 25px;
  margin-left: 39px;
  margin-top: 15px;
  border-style: solid;
  border-width: 1px;
  border-radius: 4px;
  /* box-shadow: 6px 6px 6px rgba(0.05, 0.05, 0.1, 0.05); */
  border-color: rgba(70, 70, 84, 0.227);
  &:hover{
    border-color: #5e8591;
    background-color: #a9d1de;
    box-shadow: 6px 6px 6px rgba(0.05, 0.05, 0.1, 0.05);
    cursor: pointer;
  }
`