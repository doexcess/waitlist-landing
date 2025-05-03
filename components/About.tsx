import Image from 'next/image';
import React from 'react';
import Icon from './ui/icons/Icon';

const About = () => {
  return (
    <section className='w-full px-6 py-10 md:py-18 bg-white dark:bg-gray-900'>
      <div className='flex flex-col justify-center items-center gap-2 mb-4'>
        {/* Badge */}
        <div className='mb-2'>
          <span className='flex gap-2 px-3 py-2 text-sm text-gray-500 dark:text-gray-400 dark:border-gray-600 dark:border shadow-sm rounded-full '>
            <Icon url='/images/brief.png' />
            Brief Description
          </span>
        </div>

        {/* Heading */}
        <h1 className='text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4'>
          About Doexcess
        </h1>
      </div>
      <div className='max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12'>
        {/* Left Content */}
        <div className='flex-1'>
          {/* Description */}
          <p className='text-gray-600 dark:text-gray-300 mb-8 max-w-xl leading-relaxed'>
            Doexcess is an all-in-one SaaS platform designed to help businesses,
            communities, and organizations onboard new members, automate
            communications via email and manage digital offerings like online
            courses and event tickets—all from a single, user-friendly
            interface.
          </p>

          {/* Features Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-15 text-gray-700 dark:text-gray-200 text-sm max-w-lg mt-10'>
            <div className='flex flex-col justify-center items-center text-center gap-2'>
              <Icon url='/images/onboarding.png' width={30} />
              <h3 className='text-gray-900 dark:text-white mb-1'>
                Seamless Onboarding
              </h3>
              <p>Guided flows for user registration and role assignments.</p>
            </div>
            <div className='flex flex-col justify-center items-center text-center gap-2'>
              <Icon url='/images/messaging.png' width={30} />
              <h3 className='text-gray-900 dark:text-white mb-1'>
                Automated Messaging
              </h3>
              <p>Schedule and send templated email campaigns.</p>
            </div>
            <div className='flex flex-col justify-center items-center text-center gap-2'>
              <Icon url='/images/product.png' width={30} />
              <h3 className='text-gray-900 dark:text-white mb-1'>
                Content & Event Management
              </h3>
              <p>Create, list, and administrate courses and event tickets.</p>
            </div>
            <div className='flex flex-col justify-center items-center text-center gap-2'>
              <Icon url='/images/chart.png' width={30} />
              <h3 className='text-gray-900 dark:text-white mb-1'>
                Analytics & Reporting
              </h3>
              <p>Review real-time dashboards and downloadable reports.</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className='flex-1 flex justify-center'>
          <Image
            src='/images/workspace.png' // Replace this with actual path
            alt='Workspace'
            width={500}
            height={400}
            className='w-full max-w-md'
          />
        </div>
      </div>
    </section>
  );
};

export default About;
