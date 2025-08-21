import React, { useEffect } from 'react'

export default function ExpertGrid({setSelectedTeam, selectedTeam}) {
  const [experts, setExperts] = React.useState([]);


  useEffect(() => {
    fetch('./experts.json')
    .then(res => res.json())
    .then(data => setExperts(data))
  }, [])  



  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {experts.map(expert => (
          <div key={expert.id} className='bg-slate-100 p-5 rounded-md text-center shadow-sm'>
            <img className='w-32 h-32 rounded-full mx-auto my-2' src={expert.img} alt="" />
            <h1 className='font-light text-2xl text-center my-2'>{expert.name}</h1>
            <p><span className='font-bold'>Age: </span>{expert.age}</p>
            <p><span className='font-bold'>Designation: </span>{expert.designation}</p>
            <p className='text-muted-foreground my-2'><span className='font-bold'>Salary: </span>${expert.salary}</p>
            <p className='text-muted-foreground my-2'><span className='font-bold'>Address: </span>{expert.address}</p>
            <button className='bg-amber-300 px-3 py-2 rounded-md mx-auto my-5 font-bold hover:bg-amber-400 transition-all duration-300 cursor-pointer' onClick={() => {setSelectedTeam([...selectedTeam, expert])}}>Add To Team</button>
          </div>
        ))}
    </div>
  )
}
