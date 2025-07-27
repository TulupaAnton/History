import React from 'react'
import { ArrowR } from '../../Arrow/ArrowR'

export function Igor () {
  return (
    <div className='flex flex-col items-center bg-yellow-50 pl-15 pt-10'>
      {/* Карточка + стрелка вправо */}
      <div className='flex flex-row items-center justify-center gap-6'>
        {/* Карточка Игоря */}
        <div className='max-w-xs w-60 border-4 border-yellow-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 bg-yellow-50 bg-[url("/assets/pergament-texture.jpg")] bg-cover'>
          <img
            src='/Igor.jpg'
            alt='igor'
            className='w-full object-cover h-48 border-b-4 border-yellow-800'
          />
          <div className='p-4'>
            <h2 className='text-2xl font-serif text-yellow-900 text-center'>
              Князь Ігорь Рюрікович
            </h2>
            <p className='mt-2 md:font-bold text-yellow-800 text-xl text-center'>
              (912–945рр.)
            </p>
            <div className='flex flex-col items-center'>
              <button className='mt-4 bg-yellow-800 text-yellow-100 px-4 py-2 rounded-md shadow hover:bg-yellow-900 transition duration-300'>
                Подробнее
              </button>
            </div>
          </div>
        </div>

        {/* Стрелка справа от карточки, центрированная */}
        <div className='flex items-center'>
          <ArrowR />
        </div>
      </div>
    </div>
  )
}
