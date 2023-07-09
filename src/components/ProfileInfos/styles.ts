import styled, { css } from "styled-components";
import {RiBuilding4Line, RiMapPin2Line, RiMailLine, RiLinksLine } from 'react-icons/ri';
export const Container = styled.div`
    @media (max-width: 600px) {
        margin-top:32px;
    }
`

export const Flex = styled.div`
    align-items: center;
    display:flex; 
    flex-direction: column;
    > div{

        > h1{
            font-size: 26px;
            line-height: 1.25;
            font-weight: 600;
            color:#24292e;
            text-align: center;
        }
        > h2{
            font-size: 16px;
            color:#666;
            text-align: center;
        }

        
    }
`;

export const Avatar = styled.img`
    width: 32%;
    border-radius:50%;

    @media(min-width: 768px){
        width: 50%
        }
`;

export const Column = styled.ul`
    background-color: #F8F8F8;
    > li{
        display: flex;
        align-itens: center;
        font-size: 14px;
        margin-top: 10px;
    }
    > span{
        maring-left: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    @media(min-width: 768px){
        background-color: #fff
        }
`;

export const cssIcons = css`
    fill: #00BFFF;
    width: 16px;
    heigth: 16px;
    flex-shrink: 0;
`

export const CompanyIcon = styled(RiBuilding4Line)`${cssIcons}`;

export const LocationIcon = styled(RiMapPin2Line)`${cssIcons}`;

export const EmailIcon = styled(RiMailLine)`${cssIcons}`;

export const BlogIcon = styled(RiLinksLine)`${cssIcons}`;