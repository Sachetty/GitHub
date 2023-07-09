import styled  from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;

    @media(min-width: 768px){
        width: 30%
        }
        
    > button {
        display: flex;
        width: 100%;
        padding: 20px 16px;
        background-color: transparent;
        border: none;
        cursor: pointer;
        font-size: 16px;
        position: relative;
        transition: border-bottom-color 0.3s ease;
        justify-content: center;

        > div{
                display: flex;
                width: 40px;
                height: 24px;
                margin-left: 10px;
                font-size: 14px;
                background-color: #F8F8F8;
                color: #989898;
                border-radius: 36%;
                align-items: center;
                justify-content: center;
                border: 1px solid #989898;
        }
    }
    
    > button::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: orange;
        transform: scaleX(0);
        transition: transform 0.3s ease;
    }
    
    > button.selected::before {
        transform: scaleX(1);
    }

    > button:not(.selected) {
        color: #aaa;  
    }

`