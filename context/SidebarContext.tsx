'use client'

import React, { useState } from 'react'

const Context = React.createContext({
  isOpen: false,
  setIsOpen: (previousState: any) => {},
  toggleSidebar: () => {}
});

export const useSidebarContext = () => {
    return React.useContext(Context);
}

type IProps = {
    children: React.ReactNode
}

const SidebarContext = ({ children }: IProps) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Context.Provider value={{ isOpen, setIsOpen, toggleSidebar }}>
        {children}
    </Context.Provider>
  )
}

export default SidebarContext