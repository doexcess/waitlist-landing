import React from 'react';
import Logo from './ui/Logo';

const Header = () => {
  return (
    <nav className='bg-white border-gray-200 dark:bg-gray-900'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4'>
        <a href='/' className='flex items-center space-x-3 rtl:space-x-reverse'>
          <Logo />
        </a>
      </div>
    </nav>
  );
};

export default Header;
