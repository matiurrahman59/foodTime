import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <header className='border-b border-blackBasic/20 bg-green/10 py-4'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Header Logo */}
        <Image src='/logo.png' width={147} height={50} alt='Brand Logo' />

        <div className='flex items-center gap-[100px]'>
          {/* Nav Items */}
          <nav>
            <ul>
              <li className='flex items-center text-blackBasic gap-[70px] text-lg leading-9'>
                <Link href='/'>Home</Link>
                <Link href='/'>Blog</Link>
                <Link href='/'>About us</Link>
                <div className='flex items-center cursor-pointer'>
                  <Link href='/'>En</Link>
                  <div>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-6 h-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                      />
                    </svg>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
          {/* Right content */}
          <div>
            <div className='flex items-center gap-6 text-white'>
              <Link
                href='/'
                className='btn py-3 px-[50px] text-xl leading-[34px] '
              >
                Login
              </Link>
              <button
                type='button'
                className='h-[60px] w-[60px] grid place-content-center relative rounded-full bg-primaryColor '
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                  />
                </svg>

                <div className='absolute -top-2 -right-2 h-[26px] w-[26px] grid place-content-center bg-secondaryColor rounded-full'>
                  2
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
