import React from 'react'

export default function SingleSelectedCard({name, img}) {
  return (
    <div className='flex items-center justify-between bg-white p-2  shadow-sm   rounded-full'>
        <img className='w-16 h-16 rounded-full' src={img} alt="" />
        <div className="text-center w-1/2">
            <h2 className='font-bold text-xl'>{name}</h2>
        </div>
    </div>
  )
}
