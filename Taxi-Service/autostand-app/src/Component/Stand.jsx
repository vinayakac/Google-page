import {  Table  } from 'antd';
const columns = [
  {
    title: 'SL.No',
    dataIndex: 'slno',
    key: 'slno',
    render: (text) => <a href='/'>{text}</a>,
  },
  {
    title: 'Autostand Name',
    dataIndex: 'autostandname',
    key: 'autostandname',
  },
  {
    title: ' Near Address',
    dataIndex: 'nearaddress',
    key: 'nearaddress',
  },
  // {
  //   title: 'Tags',
  //   key: 'tags',
  //   dataIndex: 'tags',
  //   render: (_, { tags }) => (
  //     <>
  //       {tags.map((tag) => {
  //         let color = tag.length > 5 ? 'geekblue' : 'green';
  //         if (tag === 'loser') {
  //           color = 'volcano';
  //         }
  //         return (
  //           <Tag color={color} key={tag}>
  //             {tag.toUpperCase()}
  //           </Tag>
  //         );
  //       })}
  //     </>
  //   ),
  // },
  // {
  //   title: 'Action',
  //   key: 'action',
  //   render: (_, record) => (
  //     <Space size="middle">
  //       <a href='/'>Invite {record.name}</a>
  //       <a href='/'>Delete</a>
  //     </Space>
  //   ),
  // },
];
const data = [
  // {
  //   key: '1',
  //   slno: 'John Brown',
  //   autostandname: 32,
  //   nearaddress: 'New York No. 1 Lake Park',
  //   // tags: ['nice', 'developer'],
  // },
  // {
  //   key: '2',
  //   slno: 'Jim Green',
  //   autostandname: 42,
  //   nearaddress: 'London No. 1 Lake Park',
  //   // tags: ['loser'],
  // },
  // {
  //   key: '3',
  //   slno: 'Joe Black',
  //   autostandname: 32,
  //   nearaddress: 'Sydney No. 1 Lake Park',
  //   // tags: ['cool', 'teacher'],
  // },
];
const App = () => <Table columns={columns} dataSource={data} />;
export default App;