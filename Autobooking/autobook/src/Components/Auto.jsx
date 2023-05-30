import { Radio } from 'antd';
import { useState } from 'react';

import './Auto.css';

const App1 = () => {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className='Radio'>
        <div className='R-text'>Will you return with us?</div>
        <div className='R-radio'>
    <Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>Yes</Radio>
      <Radio value={2}>No</Radio>
      
    </Radio.Group>



    
    </div>
   
    </div>

    
  );
};
export default App1;