import React from 'react'
import { Arrow } from '../../Arrow/Arrow'

export function Oleg () {
  return (
    <div className='flex flex-col items-center justify-start  bg-yellow-50  pt-10'>
      <div className='max-w-xs border-4 w-60 border-yellow-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 bg-yellow-50 bg-[url("/src/assets/pergament-texture.jpg")] bg-cover'>
        <img
          src='/oleg.jpg'
          alt='Oleg'
          className='w-full object-cover h-48 border-b-4 border-yellow-800'
        />
        <div className='p-4'>
          <h2 className='text-2xl font-serif text-yellow-900 text-center'>
            Князь Олег
          </h2>
          <p className='mt-2 md:font-bold text-yellow-800 text-xl text-center'>
            (882–912 рр.)
          </p>
          <div className='flex flex-col items-center'>
            <button className='mt-4 bg-yellow-800 text-yellow-100 px-4 py-2 rounded-md shadow hover:bg-yellow-900 transition duration-300'>
              Подробнее
            </button>
          </div>
        </div>
      </div>
      <div className='mt-4 flex flex-col items-center'>
        <div className='text-center text-red-800 font-semibold italic mt-2'>
          Гадюка виползає з юлюбленого коня та вбиває Олега
          <img
            src='/snake.png'
            alt='Змея'
            className='w-15 h-15 inline-block mr-2'
          />
        </div>
      </div>

      <div className='mt-4'>
        <Arrow />
      </div>
    </div>
  )
}
