// import { DownloadOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { useState } from 'react';
import './Button.css';

const App2 = () => {
  const [size] = useState('large'); // default is 'middle'

  return (
    <>
      
      
      <Space direction="vertical">
        <Space wrap>
          <Button type="primary" size={size}>
            Request
          </Button>
         
        </Space>
        
      </Space>
    </>
  );
};
export default App2;