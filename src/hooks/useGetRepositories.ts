import { ChangeEvent, useState } from 'react';
import instance from '../api/api';
import { TypeRepository } from '../components/types/types';
import { warning } from '../utils/warning';
import { TypeUseGetRepositories } from './../components/types/types';
import { usePrevious } from './usePrevious';

export function useGetRepositories(): TypeUseGetRepositories {
  const [loading, setLoading] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const [repositories, setRepositories] = useState<TypeRepository[]>([]);
  const prevState = usePrevious(searchValue);

  const searchValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  async function getRepositories(): Promise<TypeRepository[] | undefined> {
    try {
      const response = await instance.get(`${searchValue}/repos`);
      return response.data.map((obj: TypeRepository, index: number) => {
        return {
          key: index,
          name: obj.name,
          url: obj.url,
          forks_count: obj.forks_count,
          watchers_count: obj.watchers_count,
          stargazers_count: obj.stargazers_count,
        };
      });
    } catch {
      warning('Organization not found');
    }
  }

  async function onSearch(): Promise<void> {
    if (searchValue !== prevState) {
      setLoading(true);
      const data = await getRepositories();
      setLoading(false);
      setRepositories(data!);
    } else if (searchValue === '') {
      warning('Please, enter organization');
    }
  }

  return {
    loading,
    repositories,
    searchValueChange,
    onSearch,
  };
}
