import React from "react";
import { Container, LogoHeader, Title } from "./styles";

const Header:React.FC = () =>{
    return(
        <Container>
            <LogoHeader/>
            <Title>
                Github  
                <h2>/</h2>
                <h3> Profile</h3>
            </Title>
            {/* <SearchForm>
                <input placeholder="Search Here"/>
            </SearchForm> */}
        </Container>
    );
};

export default Header;