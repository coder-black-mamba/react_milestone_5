import React from 'react'
import SingleSelectedCard from './SingleSelectedCard'

export default function SelectedSidebar({selectedTeam, setSelectedTeam}) {
  return (
    <div className='bg-slate-100 py-5 px-2 rounded-m text-center sticky top-2'>

    {selectedTeam.length > 0 && (
      <div className='p-3 border-b border-slate-300  my-3'>
      <h2 className='text-2xl font-bold '>Expert Added : {selectedTeam.length}</h2>
      <h2 className='text-2xl font-bold'>Total Cost :$ {selectedTeam.reduce((total, expert) => total + expert.salary, 0)}</h2>
      </div>
    )}

{/* done */}


      {selectedTeam.length > 0 ? selectedTeam.map((expert) => (
        <div key={Math.random()} className='mt-3'>
          <SingleSelectedCard name={expert.name} img={expert.img}/>
        </div>
      )) : <p className='text-center text-red-500 font-bold'>No team selected</p>}




{selectedTeam.length > 0 && (
      <button className=' bg-amber-300 px-3 py-2 w-full rounded-md mx-auto my-5 font-bold hover:bg-amber-400 transition-all duration-300 cursor-pointer'>Confirm List</button>
    )}

    </div>
  )
}