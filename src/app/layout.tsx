import React from 'react';
import { Quicksand } from 'next/font/google';
import StyledComponentsRegistry from '../lib/AntdRegistry';
import './globals.css';
import Image from 'next/image';

const quicksand = Quicksand({ subsets: ['latin'] });

export const metadata = {
  title: 'Cool next app',
  description: 'A awesome portal for starting with Next.js'
};

const RootLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <html lang="en">
      <body className={quicksand.className} data-attr="parent-tamal-sen">
        <div
          dangerouslySetInnerHTML={{
            __html: `
                <script>
                  console.log('Extra script')
                </script>
          `
          }}></div>
        <div
          style={{
            position: 'fixed',
            zIndex: '9999',
            top: '50%',
            left: '50%',
            backgroundColor: '#fff',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex'
          }}
          id="globalLoader">
          <Image src="/loading.gif" alt="" width="150" height="150" />
        </div>
        {/* <StyledComponentsRegistry>{children}</StyledComponentsRegistry> */}
        <>{children}</>
      </body>
    </html>
  );
};

export default RootLayout;
