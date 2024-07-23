'use client';
import { handleLogin, handleLogout } from '@/lib/action';
import { X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const links = [
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
];

const Links = ({ session }) => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  return (
    <div className='relative'>
      <div className='hidden items-center lg:flex gap-x-2'>
        {links.map((link) => (
          <Link
            href={link.path}
            key={link.title}
            className={`${
              pathName === link.path && 'bg-white hover:bg-white text-black'
            } hover:bg-slate-800 px-4 py-2 font-medium text-center rounded-3xl transition-colors duration-300 ease-in-out`}
          >
            {link.title}
          </Link>
        ))}
        {session?.user ? (
          <>
            <Link
              href='/dashboard'
              className={`${
                pathName === '/dashboard' && 'border-[#367dfd] bg-gray-950'
              } px-4 py-2 ml-2 font-medium text-center rounded-3xl border-2 hover:border-[#367dfd] transition-colors duration-300 ease-in-out`}
            >
              Dashboard
            </Link>
            <form action={handleLogout}>
              <button className='font-bold p-2 ml-2 cursor-pointer bg-[#367dfd] text-white rounded'>
                Logout
              </button>
            </form>
          </>
        ) : (
          <form action={handleLogin}>
            <button className='ml-2 p-2 font-medium text-center min-w-24 bg-[#367dfd] text-white rounded'>
              Login
            </button>
          </form>
        )}
      </div>
      <Image
        src='/menu.png'
        alt='menu'
        width={25}
        height={25}
        className='block lg:hidden cursor-pointer'
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className='flex lg:hidden flex-col items-center fixed top-0 right-0 w-full h-full bg-gray-800 bg-opacity-90 z-40 shadow-lg backdrop-blur-md transition-all duration-300 ease-in-out'>
          <button
            className='absolute top-5 right-5 text-white text-2xl'
            onClick={() => setOpen(false)}
          >
            <X />
          </button>
          <div className='mt-20 flex flex-col items-center gap-4'>
            {links.map((link) => (
              <Link
                href={link.path}
                key={link.title}
                className={`${
                  pathName === link.path && 'bg-white hover:bg-white text-black'
                } hover:bg-slate-800 px-4 py-2 font-medium text-center rounded-3xl transition-colors duration-300 ease-in-out`}
              >
                {link.title}
              </Link>
            ))}
            {session?.user ? (
              <>
                <Link
                  href='/dashboard'
                  className={`${
                    pathName === '/dashboard' && 'border-[#367dfd] bg-gray-950'
                  } px-4 py-2 ml-2 font-medium text-center rounded-3xl border-2 hover:border-[#367dfd] transition-colors duration-300 ease-in-out`}
                >
                  Dashboard
                </Link>
                <form action={handleLogout}>
                  <button className='font-bold p-2 ml-2 cursor-pointer bg-[#367dfd] text-white rounded'>
                    Logout
                  </button>
                </form>
              </>
            ) : (
              <form action={handleLogin}>
                <button className='ml-2 p-2 font-medium text-center min-w-24 bg-[#367dfd] text-white rounded'>
                  Login
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Links;
