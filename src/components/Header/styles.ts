import styled from "styled-components";
import { FaGithub} from "react-icons/fa"

export const Container = styled.div`
    display: flex;
    align-items: center;
    background: #24292e;
    padding: 11px 16px;  

    @media (max-width: 600px) {
        display: none;
    }
`;

export const LogoHeader = styled(FaGithub)`
    fill: #fff;
    width: 32px;
    heigth: 32px;
    flex-shrink:0;
    font-size:30px
`;
export const SearchForm = styled.form``;

export const Title = styled.h1`
    display: flex;
    color: #fff;
    flex-direction: row;
    align-items: center;
    font-size: 18px;
    >h2 {
        font-size: 16px;
        padding: 0 1em 0 1em;  
        font-style: italic; 
    }
    >h3 {
        font-size: 12px;
        font-weight: 200;
    }
`;