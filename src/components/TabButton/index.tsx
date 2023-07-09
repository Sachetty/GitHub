import React from "react";
import { Container } from "./styles"

interface Props {
  icon: React.ReactNode,
  text: string,
  amount: number;
  isSelected: boolean,
  onClick: React.MouseEventHandler<HTMLButtonElement>,
}

const TabButton:React.FC<Props> = ({
    icon,
    text,
    amount,
    isSelected,
    onClick,
    }) =>{

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        onClick(event);
      };

    return(
        <Container>
            <button className={`button ${isSelected ? 'selected' : ''}`} onClick={handleClick} >
            {icon && 
            <span>{icon}</span>
             }
            {text}
            <div>{amount}</div>
            </button>
        </Container>
    );
}

export default TabButton;