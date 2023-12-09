'use client';

import React, { useEffect, useState } from 'react';
import { Table, Button, Spin } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/lib/hooks';
import { updateHeaderTitle } from '@/app/reducers/header/headerSlice';

interface DataType {
  key: string;
  // name: string;
  // email: string;
  name: string;
  location: string;
  scheduled: string;
  status: string;
  // Add other fields as needed
}

const mockData: DataType[] = [
  {
    key: 'A Bac',
    name: 'A Bachchan',
    location: 'India',
    scheduled: '12 july, 2023 9:30 AM',
    status: 'Completed'
  },
  {
    key: 'T Sen',
    name: 'T Sen',
    location: 'India',
    scheduled: '15 may, 2023 9:30 AM',
    status: 'Completed'
  },
  {
    key: 'S Man',
    name: 'S Mana',
    location: 'India',
    scheduled: '17 jun, 2023 9:30 AM',
    status: 'Scheduled'
  },
  {
    key: 'R Muk',
    name: 'R Mukharjee',
    location: 'Africa',
    scheduled: '12 july, 2023 9:30 AM',
    status: 'Completed'
  },
  {
    key: 'M Lah',
    name: 'M Laha',
    location: 'America',
    scheduled: '12 july, 2023 9:30 AM',
    status: 'Cancelled'
  },
  {
    key: 'A Bach',
    name: 'A Bachman',
    location: 'India',
    scheduled: '12 july, 2023 9:30 AM',
    status: 'Cancelled'
  }
  // Add more mock data as needed
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: true
  },
  { title: 'Location', dataIndex: 'location', key: 'location', sorter: true },
  {
    title: 'Scheduled on',
    dataIndex: 'scheduled',
    key: 'scheduled',
    sorter: true,
    render: (scheduled: string, record: DataType) => {
      return <span className="text-pink">{scheduled}</span>;
    }
  },
  { title: 'Status', dataIndex: 'status', key: 'status' }
];
const pageName = 'Dashboard';

const Dashboard: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    dispatch(updateHeaderTitle(pageName));
  });

  const handleAddNew = () => {
    router.push('/auth-stack/dashboard/new');
  };

  return (
    <>
      <Button
        type="primary"
        className="mx-0 my-10 md:my-5 w-[clamp(120px,9%,120px)] " /* h-8 text-center */ /* style={{background:'rgba(87, 66, 131, 1)'}} */
        onClick={handleAddNew}>
        + Add new
      </Button>
      <div style={{ width: '100%', overflow: 'auto' }}>
        <Table dataSource={mockData} columns={columns} loading={loading} />
      </div>
    </>
  );
};

export default Dashboard;
