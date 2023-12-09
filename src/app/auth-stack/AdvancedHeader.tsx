'use client';

import React, { useEffect } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout as AntLayout } from 'antd';
import { selectHeaderTitle } from '../reducers/header/headerSlice';
import { useAppSelector } from '@/lib/hooks';

const { Header } = AntLayout;

interface PropAdvancedHeader {
  collapsed: boolean;
  toggleCollapsed: Function;
}

const AdvancedHeader: React.FC<PropAdvancedHeader> = ({
  collapsed,
  toggleCollapsed
}) => {
  const MenuTrigger = collapsed ? MenuUnfoldOutlined : MenuFoldOutlined;
  const headerTitle = useAppSelector(selectHeaderTitle);
  return (
    <Header className="site-layout-background p-0 bg-white fixed w-full z-50">
      <MenuTrigger
        className="trigger text-xl p-4 cursor-pointer text-black"
        onClick={() => {
          toggleCollapsed();
        }}
      />
      <span className="text-lg font-bold">{headerTitle}</span>
    </Header>
  );
};

export default AdvancedHeader;
