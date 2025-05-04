import Image from 'next/image';
import React, { useState } from 'react';

const Logo = ({
  width = 150,
  height = 120,
}: {
  width?: number;
  height?: number;
}) => {
  const [loaded, setLoaded] = useState({
    light: false,
    dark: false,
  });

  return (
    <div className='relative'>
      {/* Light mode logo with transition */}
      <div
        className={`relative w-full h-full transition-opacity duration-300 ${
          loaded.light ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Image
          src='/logo.png'
          width={width}
          height={height}
          alt='Doexcess Logo'
          className='object-contain dark:opacity-0'
          onLoadingComplete={() =>
            setLoaded((prev) => ({ ...prev, light: true }))
          }
          priority // Important for above-the-fold logo
        />
      </div>

      {/* Dark mode logo with transition */}
      <div
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 ${
          loaded.dark ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Image
          src='/logo-white.png'
          width={width}
          height={height}
          alt='Doexcess Logo'
          className='object-contain opacity-0 dark:opacity-100'
          onLoadingComplete={() =>
            setLoaded((prev) => ({ ...prev, dark: true }))
          }
          priority
        />
      </div>

      {/* Loading placeholder (only shows if both images are loading) */}
      {(!loaded.light || !loaded.dark) && (
        <div className='absolute inset-0 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg' />
      )}
    </div>
  );
};

export default Logo;
