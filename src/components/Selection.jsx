import React from 'react'

export default function Selection({selectedTeam, setSelectedTeam}) {
  return (
    <div className='bg-slate-100 py-5 px-2 rounded-md'>

    {selectedTeam.length > 0 && (
      <>
      <h2>Expert Added : {selectedTeam.length}</h2>
      <h2>Total Cost : {selectedTeam.reduce((total, expert) => total + expert.salary, 0)}</h2>
      </>
    )}




      {selectedTeam.length > 0 ? selectedTeam.map((expert) => (
        <div key={Math.random()}>
          <h1 className='font-bold text-xl'>{expert.name}</h1>
          <p className='text-muted-foreground'>{expert.designation}</p>
          <p>{expert.salary}</p>
          <button className='bg-amber-300 px-2 py-1 rounded-md'>Remove</button>
        </div>
      )) : <p className='text-center text-red-500 font-bold'>No team selected</p>}
    </div>
  )
}