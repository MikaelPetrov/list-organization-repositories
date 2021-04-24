import { Layout } from 'antd';
import 'antd/dist/antd.css';
import React, { memo } from 'react';
import './App.css';
import Loader from './components/Loader/Loader';
import RepositoriesList from './components/RepositoriesList/RepositoriesList';
import SearchBar from './components/SearchBar/SearchBar';
import { useGetRepositories } from './hooks/useGetRepositories';

const { Header, Content } = Layout;

const App: React.FC = (): JSX.Element => {
  const { loading, repositories, searchValueChange, onSearch } = useGetRepositories();

  return (
    <div className="App">
      <Layout>
        <Header>
          <SearchBar onSearch={onSearch} searchValueChange={searchValueChange} />
        </Header>
        <Content>
          {loading ? <Loader /> : repositories?.length !== 0 && <RepositoriesList repositories={repositories} />}
        </Content>
      </Layout>
    </div>
  );
};

export default memo(App);
