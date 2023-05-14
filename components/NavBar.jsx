import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const NavBar = () => {
  const [navShown, setNavShown] = useState(false);
  return (
    <header className='border-b border-blackBasic/20 bg-green/10 py-2 md:py-3 2xl:py-4'>
      <div className='container mx-auto flex justify-between items-center px-3 lg:px-5 2xl:px-0'>
        {/* Header Logo */}
        <Image
          src='/logo.png'
          width={147}
          height={50}
          alt='Brand Logo'
          className='w-[100px] h-auto lg:w-[147px]'
        />

        {/* Only Show on small screen */}
        {/* Menu button */}
        <div onClick={() => setNavShown(!navShown)} className='lg:hidden'>
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
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          </div>
        </div>

        {/* Only show on large screen */}
        <div className=' hidden lg:flex items-center gap-[100px]'>
          <nav>
            <ul className='flex items-center text-blackBasic transition-all gap-[70px] text-lg leading-9'>
              <li className='group transition-all'>
                <Link href='/' className='navLink'>
                  Home
                </Link>
              </li>
              <li className='group transition-all'>
                <Link href='/' className='navLink'>
                  Blog
                </Link>
              </li>
              <li className='group transition-all'>
                <Link href='/' className='navLink'>
                  About us
                </Link>
              </li>
              <li className='group transition-all'>
                <div className='flex items-center cursor-pointer'>
                  <Link href='/' className='navLink'>
                    En
                  </Link>
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
