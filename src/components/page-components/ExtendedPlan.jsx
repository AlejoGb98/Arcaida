import React from 'react'
import Check from '../../assets/check.png'

const ExtendedPlanCard = ({plan}) => {
  
  const {id, name, resume, benefits } = plan;

  return (
    <div className='container py-4 lg:py-8 px-4 lg:px-8 rounded-2xl 
                     planGradient shadow-md'>

      <div className='mb-4 lg:min-h-32 lg:mb-6 text-center'>
        <p className='lg:mb-4 xl:text-lg'>{name}</p>
        
        <p className='font-light text-neutral-100 tracking-wide drop-shadow-lg text-sm xl:text-lg'>{resume}</p>
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

export default ExtendedPlanCard