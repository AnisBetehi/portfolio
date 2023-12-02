'use client'

import Link from 'next/link'
import React from 'react'
import Container from '../common/Container'
import Image from 'next/image'
import { RiMenu4Line } from "react-icons/ri";
import Navlink from '../common/Navlink';
import { useSidebarContext } from '../../context/SidebarContext';
import { navLinks, socials } from '../../data/header'

const Header = () => {

  const { toggleSidebar } = useSidebarContext();

  return (
    <header className='py-6 bg-white backdrop-blur-sm shadow-md sticky top-0 z-10'>
        <Container className='flex flex-row-reverse md:flex-row justify-between items-center'>

            <RiMenu4Line 
              className='md:hidden text-2xl cursor-pointer text-gray-700 select-none' 
              onClick={toggleSidebar}
            />

            <nav className='hidden md:block'>
              <ul className='flex gap-12'>
                {navLinks.map((link, index) => (
                  <Navlink 
                    key={index}
                    link={link}
                  />
                ))}
              </ul>
            </nav>

            <Link href="/">
              <Image
                src='/logo.svg'
                alt='Anis Betehi'
                title='Anis betehi'
                width='40'
                height='20'
              />
            </Link>

            <div className='hidden md:flex items-center gap-4'>
                {socials.map((social, index) => (
                  <Link key={index} href={social.link} target='_blank' title={social.title}>
                    <social.icon className='text-xl' />
                  </Link>
                ))}
            </div>

        </Container>
    </header>
  )
}

export default Header