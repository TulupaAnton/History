import React from 'react'
import { Igor } from '../Igor/Igor'
import { Olga } from '../Olga/Olga'

export function DuoCards () {
  return (
    <div className='flex flex-row items-start justify-center gap-10 bg-yellow-50 pl-90 p-10'>
      <Igor />
      <Olga />
    </div>
  )
}
