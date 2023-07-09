import styled from "styled-components";

export const Container = styled.div`
    padding: 15px 16px;
    border-radius: 10px;
    transition: transform 0.3s ease;
        &:hover {
        transform: scale(1.1);
        box-shadow: 0px 0px 0px 1px #f0f0f5;
    }

`;

export const TopSide = styled.div`
    > header{
        display:flex;
        align-itens:center;

        > a{
            padding: 24px 24px 0 24px;
            font-size: 20px;
            color: #000000;
            font-weight: 500;
        }
    }

    > p {
        margin: 8px 0 3px;
        font-size: 14px;
        font-weight: 400;
        color: #cbcbd1;
        letter-spacing: 0.1px;
        padding: 5px 24px 10px 24px;
    }

`;