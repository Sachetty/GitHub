import React from "react";
import { Container, TopSide, BottomSide, StarIcon, ForkIcon } from "./styles";
import { Link } from "react-router-dom";

interface Props{
    username: string;
    repositoryname: string;
    description?: string;
    language?: string;
    stars?: number;
    forks: number;
}

const RepositoryCard:React.FC<Props> = ({
    username,
    repositoryname,
    description,
    language,
    stars,
    forks,
}) =>{
    return(
        <Container>
            <TopSide>
                <header>
                    <Link to={`/${username}/${repositoryname}`}>{repositoryname}</Link>
                </header>
                <p>{description}</p>
            </TopSide>

            <BottomSide>
                <ul>
                    <li>
                        { stars === undefined ?
                        null
                        :
                        <StarIcon/>
                        } 
                        <span>{stars}</span>
                        <span>{language}</span>
               
                    </li>
                    <li>
                        <ForkIcon/>
                        <span>{forks}</span>
                    </li>
                </ul>
            </BottomSide>
        </Container>
    );
};

export default RepositoryCard;