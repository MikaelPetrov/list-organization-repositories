const columns: any = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
    width: 150,
  },
  {
    title: 'Url',
    dataIndex: 'url',
    key: 'url',
    fixed: 'left',
    width: 300,
  },
  {
    title: 'Forks',
    dataIndex: 'forks_count',
    key: 'forks',
    width: 100,
  },
  {
    title: 'Watchers',
    dataIndex: 'watchers_count',
    key: 'watchers',
    width: 100,
  },
  {
    title: 'Stargazers',
    dataIndex: 'stargazers_count',
    key: 'stargazers',
    width: 100,
  },
];

export default columns;
