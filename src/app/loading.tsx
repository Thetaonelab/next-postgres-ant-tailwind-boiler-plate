import { Spin } from 'antd';
import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className='flex flex-1 justify-center items-center w-full h-screen font-bold'>
      <Spin size='default'/>
    </div>
  );
};
export default Loading;
