import React, { useState, useEffect } from 'react';

// For an actual countdown timer (uncomment to use):
const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set your target date here
    const targetDate = new Date('2025-07-01T00:00:00');

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='bg-gradient-to-tr from-[#f7f8fc] to-[#e6f5ef] dark:from-gray-900 dark:to-gray-800 p-3'>
      <div className='grid grid-cols-2 md:flex py-20 justify-center items-center gap-8 md:max-w-md mx-auto'>
        <div className='text-center bg-white dark:bg-gray-900 dark:border-gray-800 dark:border p-3 md:w-md'>
          <h3 className='text-3xl'>{timeLeft.days}</h3>
          <div className='text-lg'>Days</div>
        </div>
        <div className='text-center bg-white dark:bg-gray-900 dark:border-gray-800 dark:border p-3 md:w-md'>
          <h3 className='text-3xl'>{timeLeft.hours}</h3>
          <div className='text-lg'>Hours</div>
        </div>
        <div className='text-center bg-white dark:bg-gray-900 dark:border-gray-800 dark:border p-3 md:w-md'>
          <h3 className='text-3xl'>{timeLeft.minutes}</h3>
          <div className='text-lg'>Minutes</div>
        </div>
        <div className='text-center bg-white dark:bg-gray-900 dark:border-gray-800 dark:border p-3 md:w-md'>
          <h3 className='text-3xl text-[#4045e1]'>{timeLeft.seconds}</h3>
          <div className='text-lg'>Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
