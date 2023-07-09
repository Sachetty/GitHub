import React, { useEffect, useState } from "react";
import { 
  Container, 
  Flex, 
  Avatar , 
  Column, 
  CompanyIcon, 
  LocationIcon, 
  EmailIcon, 
  BlogIcon, 
  ArrowDown, 
  ArrowUp  
} from "./styles";

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

    const [isExpanded, setIsExpanded] = useState(false);
    const [showButton, setshowButton] = useState(false);

    const handleToggleExpand = () => {
        setIsExpanded((prevIsExpanded) => !prevIsExpanded);
      };
    
      useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 768) {
            setIsExpanded(false);
          } else {
            setIsExpanded(true);
          }

        if (window.innerWidth <= 768) {
            setshowButton(false);
        } else {
            setshowButton(true);
        }

        };
    
        handleResize(); 
    
        window.addEventListener('resize', handleResize); 
    
        return () => {
          window.removeEventListener('resize', handleResize); 
        };
      }, []);

    return(
        <Container>
            <Flex>
                <Avatar src={avatarURL} alt={username}/>
                <div>
                    <h1>{name}</h1>
                    <h2>{description}</h2>
                </div>
            </Flex>
            {!showButton && (
            <button onClick={handleToggleExpand}>
                Informações Adicionais
              { isExpanded ?
                <ArrowUp/>                
                :
                <ArrowDown/>
              }
            </button>
            )}
            {isExpanded && (
        <Column>
          {company && (
            <li>
              <CompanyIcon />
              <span>{company}</span>
            </li>
          )}
          {location && (
            <li>
              <LocationIcon />
              <span>{location}</span>
            </li>
          )}
          {blog && (
            <li>
              <BlogIcon />
              <span>{blog}</span>
            </li>
          )}
          {email && (
            <li>
              <EmailIcon />
              <span>{email}</span>
            </li>
          )}
        </Column>
      )}
        </Container>
    );
};

export default ProfileInfos;