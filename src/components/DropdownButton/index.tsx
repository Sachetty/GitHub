import React, { useState } from "react";
import { Container, Button, OptionsList, OptionItem, ArrowDownIcon} from "./styles";

interface Props{
    text: string,
    options: string[];
}


const DropdownButton:React.FC<Props> = ({
    text,
    options,
}) =>{

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleToggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const handleSelectOption = (option: string) => {
      setSelectedOption(option);
      setIsOpen(false);
    };
    
    return(
        <Container>
            <Button onClick={handleToggleDropdown}>
                <ArrowDownIcon/>
                {text}
            </Button>
            <OptionsList>
            {/* <OptionsList isOpen={isOpen}> */}
                {options.map((option) => (
            <OptionItem key={option} onClick={() => handleSelectOption(option)}>
                {option}
            </OptionItem>
        ))}
            </OptionsList>
        </Container>
    );
};

export default DropdownButton;