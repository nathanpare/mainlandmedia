import React from 'react';
import { useRouter } from 'next/router';
import Dropdown from './Dropdown';
import Image from 'next/image';

const Header = () => {
  const router = useRouter();

  return (
    <div className='sticky top-0 h-24 flex justify-between
     items-center px-5'>
      <Image onClick={() => router.push("/")} className='cursor-pointer mt-6' src="/grease guys logo.png"
        alt='' height={100} width={100} />
      <Dropdown />
    </div>
  );
}

export default Header;
