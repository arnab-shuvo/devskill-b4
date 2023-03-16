import React from 'react'
import {Bars3Icon} from '@heroicons/react/24/outline'
import logo from '../../assets/logo.png'

function Header() {
  return (
    <header className='container mx-auto flex justify-between justify-items-center py-3 px-2'>
        <a href='#'>
            <img src={logo} alt='logo' />
        </a>
        <Bars3Icon className='w-10' />
    </header>
  )
}

export default Header