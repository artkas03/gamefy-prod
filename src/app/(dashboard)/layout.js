import { Footer } from '@/components/Footer'
import { HeaderBar } from '@/components/HeaderBar'
import { SidebarBurger } from '@/components/Sidebar/SidebarBurger'
import React from 'react'

const DashboardLayout = ({
  children
}) => {
  return (
    <div className="grid general-wrapper">
      {children}

      <SidebarBurger />
      <Footer />
      <HeaderBar />
    </div>
  )
}

export default DashboardLayout;
