import React from 'react'
import Check from '../../assets/check.png'

const PlanCard = ({plan}) => {
  
  const {id, name, price, resume, benefits } = plan;

  return (
    <div className='container py-4 lg:py-8 px-8 rounded-2xl 
                     planCardGlass'>

      <div className='text-start mb-4 lg:min-h-32 lg:mb-6'>
        <p className='lg:mb-4 xl:text-lg'>{name}</p>
        
        <p className='font-light text-neutral-100 tracking-wide drop-shadow-lg text-sm xl:text-lg'>{resume}</p>
      </div>
      

      <div>
        <p className='xl:text-6xl text-5xl mb-2 lg:mb-4 text-start font-semibold text-neutral-100 drop-shadow-lg'>
          <sup className='text-3xl'>$</sup>
          {price} </p>


        <button className='border rounded-3xl shadow-xl w-full tracking-wide py-2 mb-6 lg:mb-10 text-neutral-100 transition-all
                          hover:bg-purple-300 hover:text-black'>
          ¡Lo quiero!
        </button>        
      </div>    

      <div className=''>
        {
          benefits.map((benef) => (
            <div className='flex items-start mb-2 lg:mb-4 text-sm' key={benef}>
            
              <img src={Check} className='mr-2 mt-1 w-2 lg:w-4'/>

            <p className='text-xs lg:text-base text-start font-light text-neutral-100
            '>{benef}</p>
          </div>
          ))
        }
      </div>
    </div>  
  )
}

export default PlanCard
