import { ChangeEvent } from 'react';

export type TypeRepository = {
  key: number;
  name: string;
  url: string;
  forks_count: number;
  watchers_count: number;
  stargazers_count: number;
};

export type TypeUseGetRepositories = {
  loading: boolean;
  repositories: TypeRepository[];
  searchValueChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
};
