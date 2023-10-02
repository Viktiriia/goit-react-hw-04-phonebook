import { styled } from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
export const Button = styled.button`
  padding: 10px 20px;
  margin-top: 5px;
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid;
  background: rgba(106, 255, 218, 0.747);

`;

export const Input = styled.input`
 padding: 10px;
  margin-bottom: 10px;
  border-radius: 6px;
  border: none;
  outline: 0;
  background-color: #fff;
  box-shadow: 0 1px 6px 0 #20212447;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
  height: 100vh;
  text-align: center    
`;

export const Text = styled.label`
  margin-bottom: 15px;
`;