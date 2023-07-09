import React, { useEffect, useState } from "react";
import { 
  Container, 
  Main, 
  LeftContent, 
  RightContent, 
  ReposContainer, 
  RepositoryIcon, 
  StarLineIcon, 
  Tab, 
  SearchForm, 
  SearchLineIcon, 
  OptionsContent ,
  ButtonsContent
} from "./styles";
import ProfileInfos from "../../components/ProfileInfos";
import RepositoryCard from "../../components/RepositoryCard";
import TabButton from "../../components/TabButton";
import { APIUser, APIRepo, APIStarred } from "../../API";
import { useNavigate, useParams } from "react-router-dom";
import DropdownButton from "../../components/DropdownButton";

interface Data {
    user?: APIUser;
    repos?: APIRepo[];
    starred?:APIStarred[];
    error?: string;
  }

const Profile:React.FC = () =>{

    const [repositoryButton, setRepositoryButton] = useState(false);
    const [starButton, setstarButton] = useState(true);
    const [search, setSearch] = useState('');
    const [data, setData] = useState<Data>();
    const [backUp, setBackUp] = useState<Data>();

    const { username = 'Sachetty' } = useParams();
    const navigate = useNavigate();

    const handleButtonClick = () => {
        setstarButton(true);
        setRepositoryButton(false);
  };

  const handleButtonClick2 = () => {
    setRepositoryButton(true);
    setstarButton(false);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    navigate('/' + search.toLowerCase().trim());
  }

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos`),
      fetch(`https://api.github.com/users/${username}/starred`),
    ]).then(async (responses) => {
      const [userResponse, reposResponse, starredResponse] = responses;

      if (userResponse.status === 404) {
        setData({ error: 'User not found!' });
        return;
      }

      const user = await userResponse.json();
      const repos = await reposResponse.json();
      const starred = await starredResponse.json();

    //   const shuffledRepos = repos.sort(() => 0.5 - Math.random());
    //   const slicedRepos = shuffledRepos.slice(0, 3);

    //   const shuffledStarred = starred.sort(() => 0.5 - Math.random());
    //   const sliceStarred = shuffledStarred.slice(0, 3); 

      setData({
        user,
        repos,
        starred,
      });
      setBackUp({
        user,
        repos,
        starred,});
    });
  }, [username]);
  

  const handleSelectOption = (option: string) => {

    if (option !== 'All' && starButton == true) {
      const filteredrespos = { ...backUp}.repos?.filter((item) => item.language === option);
      setData({...backUp, repos:filteredrespos}); 
    };

    if (option !== 'All' && starButton == false) {
      const filtered = { ...backUp}.starred?.filter((item) => item.language === option);
      setData({...backUp, starred:filtered}); 
    };

    if (option === 'All')
    setData({...backUp}); 
  }
 
  if (data?.error) {
    return <h1>{data.error}</h1>;
  }

  if (!data?.user || !data?.repos) {
    return <h1>Loading...</h1>;
  }

    return(
        <Container>
            <Main>
                <LeftContent>
                    <ProfileInfos
                        description={data.user.bio}
                        name={data.user.name}
                        avatarURL={data.user.avatar_url}
                        company={data.user.company}
                        location={data.user.location}
                        email={data.user.email}
                        blog={data.user.blog}
                    />
                </LeftContent>
                <RightContent>
                    <Tab>
                        <TabButton
                            icon={<RepositoryIcon />}
                            text="Repositories"
                            isSelected={starButton}
                            onClick={handleButtonClick}
                            amount={data.user.public_repos}
                            />
                        <TabButton
                            icon={<StarLineIcon />}
                            text="Starred"
                            isSelected={repositoryButton}
                            onClick={handleButtonClick2}
                            amount={data.starred!.length}
                            />
                    </Tab>
                    <OptionsContent>
                      <ButtonsContent>
                          <DropdownButton
                            text="Type"
                            options={['All']}
                            onSelectOption={handleSelectOption}
                          />
                          <DropdownButton
                            text="Language"
                            options={['All', 'JavaScript', 'Python', 'Java', 'C++']}
                            onSelectOption={handleSelectOption}
                          />
                        </ButtonsContent>
                    <SearchForm  onSubmit={handleSubmit}>
                      <SearchLineIcon/>
                      <input
                          placeholder="Search Here"
                          value={search}
                          onChange={(e) => setSearch(e.currentTarget.value)}
                      />
                    </SearchForm>
                    </OptionsContent>
                    <ReposContainer>
                        {starButton ?
                        <div>
                        {data.repos.map((item) => (
                            <RepositoryCard
                                key={item.name}
                                username={item.owner.login}
                                repositoryname={item.name}
                                description={item.description}
                                stars={item.stargazers_count}
                                forks={item.forks}
                            />
                        ))}
                        </div>
                        :
                        <div>
                        {data.starred?.map((item) => (
                            <RepositoryCard
                                key={item.name}
                                username={item.owner.login}
                                repositoryname={item.name}
                                description={item.description}
                                language={item.language || "-"}
                                forks={item.forks}
                            />
                        ))}
                        </div>
                        }
                    </ReposContainer>
                </RightContent>
            </Main>
        </Container>
    )
}

export default Profile;