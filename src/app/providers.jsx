'use client';

import { SidebarContextProvider } from '@/context/SidebarContext';
import { UserContextProvider } from '@/context/UserContext';
import { NextUIProvider } from '@nextui-org/react';
import React from 'react';

const Providers = ({ children }) => {
  return (
    <NextUIProvider>
      <UserContextProvider>
        <SidebarContextProvider>
          {children}
        </SidebarContextProvider>
      </UserContextProvider>
    </NextUIProvider>
  );
};

export default Providers;
