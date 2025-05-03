import React, { useState } from 'react';
import axios from 'axios';
import Icon from './ui/icons/Icon';

const EmailSubmissionForm = () => {
  return (
    <div className='max-w-md mx-auto py-10 text-center rounded-lg space-y-10 px-2 md:px-0'>
      <form className='space-y-4'>
        {/* Email Input */}
        <div className='flex'>
          <input
            type='email'
            id='email'
            value={''}
            className='flex-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#9a9df0]'
            placeholder='Enter your email'
            required
          />
          {/* Submit Button */}
          <button
            type='submit'
            className='bg-[#4045e1] text-white py-2 px-4 hover:bg-[#4045e1] transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#9a9df0] focus:ring-offset-2 rounded-r-lg cursor-pointer'
          >
            Submit
          </button>
        </div>

        {/* Footer Text */}
        <p className='text-xs mt-4'>
          Want to reach us? Drop your email or contact us on{' '}
          <a
            href='mailto:hello@doexcess.com'
            className='text-[#4045e1] dark:text-white hover:underline'
          >
            hello@doexcess.com
          </a>
        </p>
      </form>
      <div className='flex gap-10 justify-center'>
        <a href='https://linkedin.com/in/company/doexcess'>
          <Icon
            url='/images/linkedin.png'
            width={25}
            className='dark:invert dark:brightness-0'
          />
        </a>
        <a href='https://instagram.com/doexcess'>
          <Icon
            url='/images/instagram.png'
            width={25}
            className='dark:invert dark:brightness-0'
          />
        </a>
        <a href='https://x.com/doexcess'>
          <Icon
            url='/images/x.png'
            width={25}
            className='dark:invert dark:brightness-0'
          />
        </a>
      </div>
    </div>
  );
};

export default EmailSubmissionForm;
