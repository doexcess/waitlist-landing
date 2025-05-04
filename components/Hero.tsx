import Image from 'next/image';
import React from 'react';
import { WaitlistForm } from './WaitlistForm';

const Hero = () => {
  return (
    <main className='h-[90vh] bg-gradient-to-tr from-[#f7f8fc] to-[#e6f5ef] dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center px-4 pt-10 sm:pt-20'>
      <h1 className='text-3xl sm:text-5xl font-bold text-center text-gray-900 dark:text-white'>
        Something Awesome <br /> is Coming!
      </h1>
      <p className='text-center text-gray-500 dark:text-gray-300 max-w-xl mt-4'>
        Simplify onboarding, automate messaging, and manage digital offerings—
        <br className='hidden sm:block' /> all in one platform.
      </p>

      <WaitlistForm />

      <div className='relative flex justify-center items-end w-full max-w-6xl flex-1 mt-10 md:mt-12'>
        {/* Background image containers with aspect ratio preservation */}
        <div className='absolute -left-4 top-0 w-[300px] sm:w-[380px] sm:h-[180px]'>
          <Image
            src='/images/analytics.png'
            alt='Analytics dashboard preview'
            width={380}
            height={180}
            loading='lazy'
            className='md:rotate-[8deg] rounded-lg dark:invert'
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              backgroundColor: 'transparent',
            }}
            placeholder='empty'
          />
        </div>

        <div className='absolute -right-4 top-0 w-[300px] sm:w-[380px] sm:h-[180px]'>
          <Image
            src='/images/chat.png'
            alt='Chat interface preview'
            width={380}
            height={180}
            loading='lazy'
            className='md:-rotate-[6deg] rounded-lg dark:invert'
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              backgroundColor: 'transparent',
            }}
            placeholder='empty'
          />
        </div>

        {/* Hero image container with fixed dimensions */}
        <div className='z-10 w-[200px] sm:w-[240px] sm:h-[320px] relative '>
          <Image
            src='/images/hero.png'
            alt='Doexcess platform preview'
            width={240}
            height={320}
            loading='lazy'
            className='rounded-xl object-cover object-bottom'
            style={{
              backgroundColor: 'transparent',
            }}
            placeholder='empty'
            sizes='(max-width: 768px) 100vw, 50vw'
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
