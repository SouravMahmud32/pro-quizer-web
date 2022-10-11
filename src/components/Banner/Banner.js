import React from 'react';
import Lottie from 'lottie-react';
import quiz from '../../assets/quiz.json'

const Banner = () => {
    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24'>
      <div className='flex flex-col items-center justify-between lg:flex-row'>
        <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
          <div className='max-w-xl mb-6 lg:mt-8'>
            <div>
              <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-yellow-400'>
                Quiz!
              </p>
            </div>
            <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
              A Participents can win <br className='hidden md:block' /> Amazing Prizes{' '}
              <span className='inline-block text-blue-400'>by particepating in this Quiz Contest</span>
            </h2>
            <p className='text-base text-gray-700 md:text-lg'>
              This is for those people who want to check their ability or knowledge in IT.
              That's why here proQuizers made this process easy and fun for you.
              So keep Quizing & keep Coding.
            </p>
          </div>
          <div className='flex flex-col items-center md:flex-row'>
            <a
              href='/blog'
              className='inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none'
            >
              <span className='mr-3'>Visit Blog</span>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='w-4'
              >
                <polyline
                  fill='none'
                  stroke='currentColor'
                  strokeMiterlimit='10'
                  points='4,4 22,4 19,14 4,14 '
                />
                <circle
                  cx='4'
                  cy='22'
                  r='2'
                  strokeLinejoin='miter'
                  strokeLinecap='square'
                  stroke='none'
                  fill='currentColor'
                />
                <circle
                  cx='20'
                  cy='22'
                  r='2'
                  strokeLinejoin='miter'
                  strokeLinecap='square'
                  stroke='none'
                  fill='currentColor'
                />
                <polyline
                  fill='none'
                  stroke='currentColor'
                  strokeMiterlimit='10'
                  points='1,1 4,4 4,14 2,18 23,18 '
                />
              </svg>
            </a>
            <a
              href='/about'
              aria-label=''
              className='inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-700'
            >
              Learn More
            </a>
          </div>
        </div>
        <div className='relative lg:w-1/2 '>
          <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
            <Lottie animationData={quiz} loop={true} />
          </div>
        </div>
      </div>
    </div>
    );
};

export default Banner;