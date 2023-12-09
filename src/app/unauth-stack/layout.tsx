import StyledComponentsRegistry from '@/lib/AntdRegistry';
import React from 'react';

const Layout = ({ children }: React.PropsWithChildren) => {
  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
};

export default Layout;
