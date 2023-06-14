import styled from 'styled-components';

export const ContactsEl = styled.div``;
export const List = styled.ul`
  list-style: none;
`;

export const ContactsItem = styled.li`
  font-size: 18px;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContactsBtn = styled.button`
  display: inline-block;
  position: relative;
  width: 180px;
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
