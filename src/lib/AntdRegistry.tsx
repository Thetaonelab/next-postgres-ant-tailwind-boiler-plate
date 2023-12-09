'use client';

import React, { useEffect } from 'react';
import {
  createCache,
  extractStyle,
  StyleProvider
} from '@ant-design/cssinjs/lib';
import type Entity from '@ant-design/cssinjs/es/Cache';
import { useServerInsertedHTML } from 'next/navigation';
import { ConfigProvider } from 'antd';
import theme from '@/app/theme/themeBase';

const StyledComponentsRegistry = ({ children }: React.PropsWithChildren) => {
  const cache = React.useMemo<Entity>(() => createCache(), []);
  const isServerInserted = React.useRef<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('globalLoader');
      if (loader) {
        setTimeout(() => {
          loader.remove();
        }, 400);
      }
    }
  }, []);

  useServerInsertedHTML(() => {
    // avoid duplicate css insert
    if (isServerInserted.current) {
      return;
    }
    isServerInserted.current = true;
    return (
      <style
        id="antd"
        dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
      />
    );
  });
  return (
    <ConfigProvider theme={theme}>
      <StyleProvider cache={cache}>{children}</StyleProvider>
    </ConfigProvider>
  );
};

export default StyledComponentsRegistry;
