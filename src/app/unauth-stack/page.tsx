'use client';
import React from 'react';
import { Button, Typography } from 'antd';
import Logo from './images/next.svg';
import Image from 'next/image';
import { Input } from 'antd';

const Page: React.FC = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-1 flex-col justify-center items-center">
        <Image
          src={Logo}
          alt=""
          className='h-5'
        />
        <Typography.Title level={4} className='m-3'>Cool Next App</Typography.Title>
        <div className="p-7 flex justify-center items-center flex-col bg-slate-300 rounded-sm">
          <div className="flex justify-center mt-5 self-center">
            <b className="heading">LOGIN</b>
          </div>

          <div className="flex justify-center mt-5">
            <Input type="email" />
          </div>

          <div className="flex justify-center mt-5">
            <Input type="password" />
          </div>

          <div className="flex justify-center mt-5">
            <Button
              type="primary"
              href="/auth-stack/dashboard">
              {"Let's get in"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;
