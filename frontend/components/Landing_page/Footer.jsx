import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavLogo from '../../public/assets/logo/sm.jpg'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-2 md:py-2  bottom-0 w-full ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-4 flex flex-row md:flex-row justify-between">
        <div className="text-center md:text-left">
          <Link href="/" legacyBehavior>
            <a className="flex items-center justify-center md:justify-start mb-2 md:mb-0">
            <Image
              src={NavLogo}
              alt='/'
              width='100'
              height='15'
              className='cursor-pointer'
            />
              <h1 className="ml-2 font-bold text-lg text-white">Share Management System</h1>
            </a>
          </Link>
        </div>
        <div className="text-center md:text-right">
          <ul className="flex justify-center md:justify-end mb-4 md:mb-0">
            <li className="ml-6">
              <Link href="/" legacyBehavior>
                <a className="text-white hover:text-gray-500 transition duration-300 ease-in-out">
                  Home
                </a>
              </Link>
            </li>
            <li className="ml-6">
              <Link href="/#aboutus" legacyBehavior>
                <a className="text-white hover:text-gray-500 transition duration-300 ease-in-out">
                  About
                </a>
              </Link>
            </li>
            <li className="ml-6">
              <Link href="/#news" legacyBehavior>
                <a className="text-white hover:text-gray-500 transition duration-300 ease-in-out">
                 News
                </a>
              </Link>
            </li>
            <li className="ml-6">
              <Link href="/#contact" legacyBehavior>
                <a className="text-white hover:text-gray-500 transition duration-300 ease-in-out">
                  Contact
                </a>
              </Link>
            </li>
            <li className="ml-6">
              <Link href="/login" legacyBehavior>
                <a className="text-white hover:text-gray-500 transition duration-300 ease-in-out">
                  Login
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      
        <div className="bg-black text-center mt-4">
          <p className="text-sm">
            &copy; 2023 Shareholder Management System. All rights reserved.
          </p>
        </div>
    </footer>
  );
};

export default Footer;