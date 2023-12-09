'use client';
import React, { useEffect } from 'react';
import { Button, Input, Typography } from 'antd';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const Page: React.FC = () => {
  useEffect(() => {
    redirect('/unauth-stack');
  });

  return (
    <>
      <div className="p-20 w-400 bg-white">
        <Typography.Title level={1}>Heading 1</Typography.Title>
        <Typography.Title level={2}>Heading 2</Typography.Title>
        <Typography.Title level={3}>Heading 3</Typography.Title>
        <Typography.Title level={4}>Heading 4</Typography.Title>
        <Typography.Title level={5}>Heading 5</Typography.Title>
        <Typography.Text>Text</Typography.Text>
        <br />
        <a href="">Link</a>
        <br />
        <Button title="Test">Submit</Button>
        <br />
        <Button title="Test" type="primary">
          Submit
        </Button>
        <br />
        <Button title="Test" type="default">
          Cancel
        </Button>
        <br />
        <Button title="Test" type="text">
          Text
        </Button>
        <br />
        <Button title="Test" type="dashed">
          Stop
        </Button>
        <br />
        <Input type="text" className="w-100" />
        <br />
        <br />
        <Link href={'/login'}>Test link</Link>
      </div>
    </>
  );
};
export default Page;
