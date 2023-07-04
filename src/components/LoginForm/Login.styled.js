import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 16px;
`;

export const Input = styled.input`
  display: block;
  height: 50px;
  width: 400px;
  border-radius: 10px;
  padding: 0 10px;
  margin: 10px 0;
  font-size: 16px;
  font-weight: 300;
  border: none;

  :hover {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  }
`;

export const LoginBtn = styled.button`
  display: inline-block;
  position: relative;
  width: 420px;
  height: 50px;
  border-radius: 10px;
  font-weight: 300;
  font-size: 16px;
  background-color: #a5a4a4;
  color: #121212;
  border: none;
  margin: 20px 10px;
  transition: 0.2s;
  transition-delay: 0.2s;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);

  :hover {
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2);
    transition-delay: 0s;
    font-size: 18px;
  }
`;
