import { Lightbulb } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className='flex flex-col gap-2 sm:flex-row items-center justify-between text-gray-400 my-4'>
      <Link href={'/'} className='font-bold text-lg flex items-center gap-2'>
        <Lightbulb /> thoughts.
      </Link>
      <div className='text-md'>
        <span>Copyright &copy; All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
