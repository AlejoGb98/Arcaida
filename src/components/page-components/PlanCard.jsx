import React from 'react'
import Check from '../../assets/check.png'

const PlanCard = ({plan}) => {
  
  const {id, name, price, resume, benefits } = plan;

  return (
    <div className={`container py-8 px-8 rounded-2xl
                     planCardGlass`}>

      <div className='text-start min-h-36 mb-6'>
        <p className='mb-4 text-2xl'>{name}</p>
        
        <p className='font-light text-neutral-100 tracking-wide'>{resume}</p>
      </div>
      

      <div>
        <p className='text-6xl mb-4 text-start font-semibold text-neutral-100'>
          <sup className='text-3xl'>$</sup>
          {price} </p>


        <button className='border rounded-3xl shadow-xl w-full tracking-wide py-2 mb-10 text-neutral-100 transition-all
                          hover:bg-purple-300 hover:text-black'>
          ¡Lo quiero!
        </button>        
      </div>    

      <div className='mb-10'>
        {
          benefits.map((benef) => (
            <div className='flex items-start mb-4 text-sm' key={benef}>
            
              <img src={Check} className='mr-2 mt-1 w-4'/>

            <p className='text-start font-light text-neutral-100
            '>{benef}</p>
          </div>
          ))
        }
      </div>
    </div>  
  )
}

export default PlanCard
