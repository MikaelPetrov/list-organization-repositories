import { Input, Space } from 'antd';
import 'antd/dist/antd.css';
import { ChangeEvent, memo } from 'react';

const { Search } = Input;

type Props = {
  onSearch: () => void;
  searchValueChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar: React.FC<Props> = (props): JSX.Element => {
  return (
    <Space direction="vertical" style={{ width: '400px', paddingTop: '16px' }}>
      <Search
        placeholder="Enter organization"
        onSearch={props.onSearch}
        onChange={props.searchValueChange}
        enterButton
      />
    </Space>
  );
};

export default memo(SearchBar);
