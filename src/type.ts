export interface Repository {
  id: string;
  name: string;
  full_name: string;
  stargazers_count: number;
  forks_count: number;
  description: string;
  created_at: string;
  updated_at: string;
  language: string;
  html_url: string;
  owner: {
    avatar_url: string;
  };
}
