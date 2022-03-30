import { Navbar } from '@shared/ui/navbar'
import React from 'react'

export const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
