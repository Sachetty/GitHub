import React, { useState } from "react";
import { Container, Button, OptionsList, OptionItem, ArrowDownIcon} from "./styles";

interface Props{
    text: string,
    options: string[];
    onSelectOption: (select:string ) => void;
}


const DropdownButton:React.FC<Props> = ({
    text,
    options,
    onSelectOption,
}) =>{

    const [isOpen, setIsOpen] = useState(false);
  
    const handleToggleDropdown = () => {
      setIsOpen(!isOpen);
    };
     
    return(
        <Container>
            <Button onClick={handleToggleDropdown}>
                <ArrowDownIcon/>
                {text}
            </Button>
            <OptionsList $isOpen={isOpen}>
                {options.map((option, key) => (
            <OptionItem key={key} onClick={() => onSelectOption(option)}>
                {option}
            </OptionItem>
        ))}
            </OptionsList>
        </Container>
    );
};

export default DropdownButton;