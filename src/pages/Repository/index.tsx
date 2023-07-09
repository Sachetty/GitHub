import React, { useEffect, useState } from "react";
import { BotError, Container } from "./styles";
import { APIUser, APIIssues } from "../../API";
import { useParams } from "react-router-dom";
import PullCard from "../../components/PullCard";

interface Data {
    user?: APIUser;
    issues?: APIIssues[];
    error?: string;
  }

const Repository:React.FC = () =>{

    const { username, repositoryname } = useParams();
    const [data, setData] = useState<Data>();

    useEffect(() => {
        fetch(`https://api.github.com/repos/${username}/${repositoryname}/issues`).then(
            async (response) => {
                setData(
                    response.status === 404
                    ? { error: 'Repository not found!' }
                    : { issues: await response.json() }
                );
            }
        );
  }, [repositoryname, username]);

  if (!data?.issues) {
    return <h1>Loading...</h1>;
  }

  console.log(data)
    return(
        <Container>
            { !data?.issues.length ?
                <BotError/>
                :
                <div>
                    {data.issues.map((item) => (
                <PullCard
                    title={item.title}
                    url={item.html_url}
                    description={item.user.login}
                />
                ))}
                </div>     
            }
        </Container>
    )
};

export default Repository;