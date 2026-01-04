'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

export default function LoginHeader() {
  return (
    <div className="w-full min-h-[30px] relative flex items-center justify-between bg-white px-7 sm:px-15 py-[15px]">
      <Image src="https://i.postimg.cc/pd38847b/dls-logo-bluebox-solid.jpg" width={45} height={45} className="w-[45px] h-[45px]" alt="logo" />
      <Link href="">
        <Button className='bg-[#006fcf] hover:bg-[#006fcf]/90 cursor-pointer text-white rounded-none'>Log In</Button>
      </Link>
    </div>
  );
}
