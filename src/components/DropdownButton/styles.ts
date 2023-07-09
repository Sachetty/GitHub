import styled from "styled-components";
import {AiOutlineDown } from 'react-icons/ai';

export const Container = styled.div`

`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border: none;
  background-color: transparent;
  color: #000;
  cursor: pointer;
`;

export const OptionsList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  margin: 0;
  padding: 8px 0;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  list-style-type: none;
`;

export const OptionItem = styled.li`
  padding: 4px 8px;
  cursor: pointer;

  &:hover {
    background-color: #f4f4f4;
  }
`;

export const ArrowDownIcon = styled(AiOutlineDown)``;

