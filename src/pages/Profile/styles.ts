import styled from "styled-components";
import { RiBookMarkLine} from "react-icons/ri";
import { AiOutlineStar } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";

export const Container = styled.div`
    --horizontalPadding: 16px;
    --verticalPadding: 24px;

    padding: var( --horizontalPadding) var(--verticalPadding);
`;

export const Main = styled.div`
    display: flex;
    margin: 0 auto;
    max-width: 1280px;
    flex-direction: column;

    @media(min-width: 768px){
        flex-direction: row;
    }

`;

export const LeftContent = styled.div`
    @media(min-width: 768px){
        width: 25%
    }
`;

export const RightContent = styled.div`
    @media(min-width: 768px){
    width: 75%;
    padding: 0 60px;
    }
`;

export const ReposContainer = styled.div`
    margin-top: var(--verticalPadding);

    > div{
        margin-top: 8px;
        display: grid;
        grid-gap: 16px;
        grid-template-columns: 1fr;
    }
`;

export const RepositoryIcon = styled(RiBookMarkLine)`
    width: 20px;
    height: 20px;
    margin-right: 4px;
`;

export const StarLineIcon = styled(AiOutlineStar)`
    width: 20px;
    height: 20px;
    margin-right: 4px;
`;


export const Tab = styled.div`
    display:flex;
    margin-left: -10px
`

export const SearchForm = styled.form`
    display:flex;
    width: 100%;
    height: 40px;
    margin-top: 40px;
    box-shadow: 0px 2px 4px #F4F4F4;
    align-items: center;

    @media(min-width: 768px){
        width: 441px;
    }

    > input {
        width: 100%;
    }

    > input: focus {
        outline: none;
    }
`

export const SearchLineIcon = styled(CiSearch)`
    width: 20px;
    height: 20px;
    margin-right: 8px;
    fill: #989898

`;