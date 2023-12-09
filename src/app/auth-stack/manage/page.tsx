'use client';
import { updateHeaderTitle } from '@/app/reducers/header/headerSlice';
import { useAppDispatch } from '@/lib/hooks';
import { Spin } from 'antd';
import { useEffect, useState } from 'react';

const pageName = 'Manage users';
const Manage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    dispatch(updateHeaderTitle(pageName));
  });

  return <Spin spinning={loading}>{pageName}</Spin>;
};

export default Manage;
