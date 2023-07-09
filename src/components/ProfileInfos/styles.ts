import styled, { css } from "styled-components";
import {
    RiBuilding4Line, 
    RiMapPin2Line, 
    RiMailLine, 
    RiLinksLine 
} from 'react-icons/ri';
import {AiOutlineDown, AiOutlineUp} from 'react-icons/ai';
export const Container = styled.div`
    
    display: flex;
    align-items: center;
    flex-direction: column;
   
    @media (max-width: 600px) {
        margin-top:32px;
    }

    > button {
        align-items: center;
        display:flex;
        flex-direction: column;
        color:#0587FF;
        margin: 15px 0;
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
    width: 100%;
    > li{
        display: flex;
        font-size: 14px;
        margin: 10px 2px;

        > span{
            color: #0587FF;
            font-size: 14px;
        }
    }
    > span{
        maring-left: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #0587FF
    }
    @media(min-width: 768px){
        background-color: #fff;
        margin-top: 30px;
        }
`;

export const cssIcons = css`
    fill: #0587FF;
    width: 16px;
    heigth: 16px;
    flex-shrink: 0;
    margin: 2px 10px;
`

export const CompanyIcon = styled(RiBuilding4Line)`${cssIcons}`;

export const LocationIcon = styled(RiMapPin2Line)`${cssIcons}`;

export const EmailIcon = styled(RiMailLine)`${cssIcons}`;

export const BlogIcon = styled(RiLinksLine)`${cssIcons}`;

export const ArrowDown = styled(AiOutlineDown)`${cssIcons}`;

export const ArrowUp = styled(AiOutlineUp)`${cssIcons}`;