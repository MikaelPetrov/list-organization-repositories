import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import 'antd/dist/antd.css';
import { memo } from 'react';

const antIcon = <LoadingOutlined style={{ fontSize: 55 }} spin />;

const Loader: React.FC = (): JSX.Element => {
  return <Spin indicator={antIcon} />;
};

export default memo(Loader);
