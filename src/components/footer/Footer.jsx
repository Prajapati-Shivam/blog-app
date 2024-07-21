import { Lightbulb } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-between text-gray-400 my-4'>
      <Link href={'/'} className='font-bold text-lg flex items-center gap-2'>
        <Lightbulb /> thoughts.
      </Link>
      <div className='text-md flex items-center'>
        <span>Copyright &copy; All rights reserved.</span>
        <Link
          href={'https://github.com/Prajapati-Shivam'}
          target='_blank'
          rel='noopener noreferrer'
          className='ml-2 cursor-pointer'
        >
          <Image
            src={'/github.svg'}
            alt='github'
            width={20}
            height={20}
            className='invert'
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
