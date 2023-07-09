export interface APIUser {
    login: string;
    name: string;
    bio: string;
    public_repos: number;
    avatar_url: string;
    blog?: string;
    company?: string;
    email?: string;
    location?: string;
  }
  
  export interface APIRepo {
    name: string;
    owner: {
      login: string;
    };
    stargazers_count: number;
    forks: number;
    html_url: string;
    language?: string;
    description?: string;
    
  }

  export interface APIStarred {
    name: string;
    owner: {
      login: string;
    };
    stargazers_count: number;
    forks: number;
    html_url: string;
    language?: string;
    description?: string;
  }

  export interface APIIssues {
    html_url: string;
    title: string;
    user: {
      login: string;
    };
  }