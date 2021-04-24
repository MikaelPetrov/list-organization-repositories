import { Table } from 'antd';
import 'antd/dist/antd.css';
import { memo } from 'react';
import { TypeRepository } from '../types/types';
import columns from './constants';

type Props = {
  repositories: TypeRepository[];
};

const RepositoriesList: React.FC<Props> = (props): JSX.Element => {
  return <Table columns={columns} dataSource={props.repositories} scroll={{ x: 1000 }} />;
};

export default memo(RepositoriesList);
