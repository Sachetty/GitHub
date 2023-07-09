import styled from "styled-components";
import { TbRobotOff } from "react-icons/tb";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
`;

export const BotError = styled(TbRobotOff)`
    width: 200px;
    height: 200px;
    margin-top: 200px;
`;