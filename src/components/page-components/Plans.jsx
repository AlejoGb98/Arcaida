import React from 'react'

import plans from '../../plans'
import PlanCard from './PlanCard'

const Plans = () => {

    
  return (
    <div className='font-unbounded planGradient container w-11/12 lg:w-10/12 mb-8 lg:mb-28 rounded-2xl text-center mx-auto py-6 lg:px-12 lg:py-16 min-h-96'>
      <h3 className='text-2xl lg:text-5xl mb-2 lg:mb-4 font-bold tracking-wide  drop-shadow-md'>Elegi tu plan</h3>
      <p className=' mx-4 tracking-wide text-neutral-600 drop-shadow-md'>Y desbloquea un sin fin de posibilidades</p>

      <div className='grid lg:grid-cols-2 justify-around mt-6 lg:mt-12 gap-4 mx-2 lg:mx-12 '>
        {
          plans.map((plan) => (
              <PlanCard key={plan.id} plan={plan}/>
          ))
        }        
      </div>


    </div>
  )
}

export default Plans
