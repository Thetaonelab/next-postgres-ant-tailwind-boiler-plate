'use client';
import React, { useEffect, useState } from 'react';
import { Layout as AntLayout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  SolutionOutlined,
  UsergroupAddOutlined,
  EnvironmentOutlined,
  TableOutlined,
  LoginOutlined
} from '@ant-design/icons';
import Image from 'next/image';
import StyledComponentsRegistry from '@/lib/AntdRegistry';
import { useRouter } from 'next/navigation';
import StoreProvider from '@/lib/StoreProvider';

import AdvancedHeader from './AdvancedHeader';

const { Header, Sider, Content } = AntLayout;

interface LayoutProps {
  children: React.ReactNode;
}
interface Menu {
  icon: React.FC;
  title: string;
  link: string;
}

const menus: Array<Menu> = [
  {
    icon: TableOutlined,
    title: 'Dashboard',
    link: '/auth-stack/dashboard'
  },
  {
    icon: UsergroupAddOutlined,
    title: 'Manage',
    link: '/auth-stack/manage'
  },
  {
    icon: EnvironmentOutlined,
    title: 'Other menu',
    link: '/auth-stack/other'
  },
  {
    icon: SolutionOutlined,
    title: 'Unique one',
    link: '/auth-stack/other'
  },
  {
    icon: LoginOutlined,
    title: 'Log out',
    link: '/unauth-stack'
  }
];
const RootLayout = ({ children }: React.PropsWithChildren) => {
  const [collapsed, setCollapsed] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [broken, setBroken] = useState(true);
  /* const [showSlider, setSlider] = useState(true); */

  const router = useRouter();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  /*  const controlSilder = () => {
    setSlider(!showSlider);
  };
 */

  return (
    <StyledComponentsRegistry>
      <StoreProvider>
        <AntLayout style={{ height: '100vh' }}>
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            breakpoint="md" // Add breakpoint for mobile responsiveness
            collapsedWidth={broken ? 0 : undefined}
            onBreakpoint={broken => {
              setBroken(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
            style={{
              background:
                'linear-gradient(to bottom,var(--primary-color),var(--secondary-color))'
            }}>
            <div>
              <div className="h-20 p-4">
                <div className="flex flex-col justify-center items-center">
                  <Image
                    src="/next.svg"
                    alt="Logo"
                    className="w-20"
                    width={48}
                    height={48}
                  />
                  {!collapsed && (
                    <h5 className="text-white text-sm font-bold mt-2 text-center">
                      My next cool app
                    </h5>
                  )}
                </div>
              </div>

              <Menu
                style={{ background: 'transparent', margin: '45% 0% 0% 0%' }}
                mode="vertical"
                defaultSelectedKeys={['1']}>
                {menus.map((m, idx) => (
                  <Menu.Item
                    key={m.title}
                    style={{ color: 'white', background: 'transparent' }}
                    icon={<m.icon />}
                    onClick={() => {
                      if (activeIndex === idx) {
                        return;
                      }
                      router.push(m.link);
                      setActiveIndex(idx);
                    }}
                    className={
                      activeIndex === idx ? 'opacity-100' : 'opacity-80'
                    }>
                    <span
                      className={activeIndex === idx ? 'font-semibold' : ''}>
                      {m.title}
                    </span>
                  </Menu.Item>
                ))}
              </Menu>
              <div
                className={`absolute bottom-10 h-35 w-full flex ${
                  collapsed ? `items-center flex-col` : ` pl-4 flex-row`
                } transition-all`}>
                <UserOutlined
                  style={{ fontSize: '20px' }}
                  className="flex justify-center items-center w-10 h-10 bg-slate-400 rounded-full"
                />
                <div
                  className={`text-left flex flex-col justify-center ${
                    collapsed ? 'mt-2' : 'ml-4'
                  }`}>
                  <div className=" text-white text-xs">Tim surr</div>
                  <div className="text-white text-sm font-bold">Admin</div>
                </div>
              </div>
            </div>
          </Sider>
          <AntLayout
            className="site-layout"
            style={{ width: '110%', overflow: 'auto' }}>
            <AdvancedHeader
              toggleCollapsed={toggleCollapsed}
              collapsed={collapsed}
            />
            <Content className="m-2 p-5 mt-14">
              <div>{children}</div>
            </Content>
          </AntLayout>
        </AntLayout>
      </StoreProvider>
    </StyledComponentsRegistry>
  );
};

export default RootLayout;
