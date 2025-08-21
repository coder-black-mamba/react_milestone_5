import React from 'react'

export default function Header() {
  return (
    <div className='text-center py-10  bg-amber-300 rounded-md shadow-sm'>
        <h1 className='text-4xl '>Make A Cyber Security Team</h1>
        <p className='text-muted-foreground py-3'>Our Server is under attack so we need to hire a special cyber security team</p>
        <h2 className='text-2xl '>Total Budget: <span className='font-bold'>10 Million</span></h2>
    </div>
  )
}
