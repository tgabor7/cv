import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signIn, signOut } from "next-auth/react";
import Button from './button';

const Navbar: React.FC = () => {
  const router = useRouter();

  const active = (route: string) => {
    return router.pathname === route ? 'underline' : ''
  }
  
  return (
    <nav>
      <ul className='flex pl-6 pr-6 bg-[#2e026d] text-white'>
        <li className='mr-6 mt-2 mb-2'>
          <Link className={active('/')} href="/">
            Home
          </Link>
        </li>
        <li className='mr-6 mt-2 mb2'>
          <Link className={active('/dashboard')} href="/dashboard">
            Dashboard3
          </Link>
        </li>
        <li className='ml-a'>
          <Button onClick={() => {
            signIn().then(() => {
              // router.push('/dashboard')
            }).catch((e) => {
              console.log(e)
            })
          }}>
            Sign in
          </Button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
