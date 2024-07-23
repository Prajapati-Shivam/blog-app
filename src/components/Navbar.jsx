import React from 'react';
import Links from './Links';
import Link from 'next/link';
import { auth } from '@/lib/auth';
import { Lightbulb } from 'lucide-react';

const Navbar = async () => {
  const session = await auth();
  return (
    <div className='flex items-center justify-between my-8'>
      <Link href='/' className='text-2xl font-bold flex items-center gap-2'>
        <Lightbulb size={24} /> thoughts.
      </Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;
