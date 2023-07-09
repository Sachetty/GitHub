import React from "react";
import { Container , TopSide} from "./styled";

interface Props{
    title: string;
    description?: string;
    url: string;
}

const PullCard:React.FC<Props> = ({
    title,
    description,
    url,
}) =>{

    const handleClick = () => {
        window.open(url, '_blank');
    }

    return(
        <Container onClick={handleClick}>
            <TopSide>
                <header>
                    <a>
                        {title}
                    </a>
                </header>
                <p>{description}</p>
            </TopSide>
        </Container>
    );
};
    

export default PullCard;