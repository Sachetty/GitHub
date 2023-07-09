import styled , { css } from "styled-components";
import {  AiFillStar } from "react-icons/ai"
import {  PiGitForkLight } from "react-icons/pi"


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px 0;
`;

export const TopSide = styled.div`
    > header{
        display:flex;
        align-itens:center;

        > a {
            font-size: 18px;
            font-weight: 600;
            color: #0587FF;
            text-decoration: none;

            &:focus, &:hover {
                text-decoration: underline;
            }
        }
    }

    > p {
        margin: 8px 0 3px;
        font-size: 14px;
        font-weight: 400;
        color: #989898;
        letter-spacing: 0.1px
    }

`;

export const BottomSide = styled.div`
    > ul {
        display: flex;
        align-items: center;
    
        > li {
          display: flex;
          align-items: center;
          margin-right: 60px;
          min-width: 64px;
    
          > span {
            margin-left: 5px;
            font-size: 12px;
            font-weight: 600;
            }
        }
    }
`;

export const cssIcons = css`
    width: 20px;
    height: 20px;
    flex-shrink:0;
`;

export const StarIcon = styled(AiFillStar)`
${cssIcons}
`;


export const ForkIcon = styled(PiGitForkLight)`
${cssIcons}
`;