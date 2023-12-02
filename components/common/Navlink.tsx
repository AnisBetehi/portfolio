import Link from 'next/link'
import React from 'react'

const Navlink = ({ link }) => {

  return (
    <li className='uppercase font-bold text-md'>
        <Link href={link.link}>
            {link.label}
        </Link>
    </li>
  )
}

export default Navlink