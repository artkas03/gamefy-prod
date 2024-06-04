'use client';

import { SidebarContextProvider } from '@/context/SidebarContext';
import { UserContextProvider } from '@/context/UserContext';
import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';
import React from 'react';

const Providers = ({ children }) => {
  return (
    <NextUIProvider>
      <SessionProvider basePath="/api/auth">
        <UserContextProvider>
          <SidebarContextProvider>
            {children}
          </SidebarContextProvider>
        </UserContextProvider>
      </SessionProvider>
    </NextUIProvider>
  );
};

export default Providers;
