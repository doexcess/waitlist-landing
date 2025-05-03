import Image from 'next/image';
import React from 'react';
import Icon from './ui/icons/Icon';
import { WaitlistForm } from './WaitlistForm';

const Hero = () => {
  return (
    <main className='h-[90vh] bg-gradient-to-tr from-[#f7f8fc] to-[#e6f5ef] dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center px-4 pt-20'>
      <h1 className='text-4xl sm:text-5xl font-bold text-center text-gray-900 dark:text-white'>
        Something Awesome <br /> is Coming!
      </h1>
      <p className='text-center text-gray-500 dark:text-gray-300 max-w-xl mt-4'>
        Simplify onboarding, automate messaging, and manage digital offerings—
        <br className='hidden sm:block' /> all in one platform.
      </p>

      <WaitlistForm />

      <div className='relative flex justify-center items-end w-full max-w-6xl flex-1 mt-12'>
        {/* background image 1 - raised slightly */}
        <Image
          src='/images/analytics.png'
          alt='chart'
          width={380}
          height={180}
          className='absolute -left-4 top-0 md:rotate-[8deg] rounded-lg dark:invert'
        />

        {/* background image 2 - raised slightly */}
        <Image
          src='/images/chat.png'
          alt='chat'
          width={380}
          height={180}
          className='absolute -right-4 top-0 md:-rotate-[6deg] rounded-lg dark:invert'
        />

        {/* hero image - flush to bottom */}
        <Image
          src='/images/hero.png'
          alt='hero'
          width={240}
          height={320}
          className='z-10 rounded-xl object-bottom'
        />
      </div>
    </main>
  );
};

export default Hero;
