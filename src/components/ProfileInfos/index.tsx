import React from "react";
import { Container, Flex, Avatar , Column, CompanyIcon, LocationIcon, EmailIcon, BlogIcon  } from "./styles";

interface Props{
    username?: string;
    name: string;
    avatarURL: string;
    company?: string;
    location?:string;
    email?:string;
    blog?: string;
    description: string;
}

const ProfileInfos:React.FC<Props> = ({
    username,
    name,
    avatarURL,
    company,
    location,
    email,
    blog,
    description,
}) =>{
    return(
        <Container>
            <Flex>
                <Avatar src={avatarURL} alt={username}/>
                <div>
                    <h1>{name}</h1>
                    <h2>{description}</h2>
                </div>
            </Flex>
            <Column>
            {company && (
                <li>
                    <CompanyIcon/>
                    <span>{company}</span>
                </li>
            )}{location && (
                <li>
                    <LocationIcon/>
                    <span>{location}</span>
                </li>
            )}{blog && (
                <li>
                    <BlogIcon/>
                    <span>{blog}</span>
                </li>
            )}{email && (
                <li>
                    <EmailIcon/>
                    <span>{email}</span>
                </li>
            )}
            </Column>
        </Container>
    );
};

export default ProfileInfos;