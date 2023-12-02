'use client'

import React from 'react'
import Navlink from './Navlink'
import { VscChromeClose } from "react-icons/vsc";
import { useSidebarContext } from '../../context/SidebarContext';
import { navLinks, socials } from '../../data/header';
import Link from 'next/link';

const Sidebar = () => {

  const { isOpen , toggleSidebar } = useSidebarContext();

  return (
   <>
    <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,.1)] backdrop-blur-sm transition-all duration-300 z-[10] ${ isOpen ? "opacity-100" : "pointer-events-none opacity-0" }`}
        onClick={toggleSidebar}
    >
    </div>
    
    <aside 
        className={`md:hidden flex flex-col min-h-screen fixed p-4 bg-white top-0 left-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-all duration-500 bot-0 min-w-[230px] z-10`}
    >
        <div className='flex justify-end'>
            <VscChromeClose 
                className='text-2xl cursor-pointer select-none'
                onClick={toggleSidebar}
            />
        </div>

        <div className='mt-8 px-8 flex flex-col flex-1'>
            <ul className='flex flex-col gap-5'>
                {navLinks.map((link, index) => (
                    <Navlink 
                        key={index}
                        link={link}
                    />
                ))}
            </ul>

            <div className='flex items-center gap-4 mt-auto'>
                {socials.map((social, index) => (
                    <Link key={index} href={social.link} target='_blank' title={social.title}>
                        <social.icon className='text-lg' />
                    </Link>
                ))}
            </div>

        </div>

    </aside>
   </>
  )
}

export default Sidebar