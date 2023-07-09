import styled from "styled-components";
import {AiOutlineDown } from 'react-icons/ai';

export const Container = styled.div`
  padding-right: 50px;
`;

export const Button = styled.button`
  width: 130%;
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border: none;
  cursor: pointer; 
  border-radius: 13px;
  background: rgb(0,86,166);
  background: linear-gradient(90deg, rgba(0,86,166,1) 0%, rgba(5,135,255,1) 100%);
  color: #FFFFFF;
  font-size: 14px;
  display:flex;
  justify-content: center;
  gap: 10px;
`;

export const OptionsList = styled.ul<{$isOpen:boolean}>`
  width:120px;
  position: absolute;
  top: 100%;
  padding: 8px 0;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  list-style-type: none;
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  
  > li {
    display:flex;
    justify-content: center;
    
  }
`;

export const OptionItem = styled.li`
  padding: 4px 8px;
  cursor: pointer;

  &:hover {
    background-color: #f4f4f4;
  }
`;

export const ArrowDownIcon = styled(AiOutlineDown)``;

