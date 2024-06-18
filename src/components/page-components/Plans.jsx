import React from 'react'

import plans from '../../plans'
import PlanCard from './PlanCard'

const Plans = () => {

    
  return (
    <div className='font-unbounded planGradient container w-10/12 lg:w-full md:mb-28 rounded-2xl text-center mx-auto py-10 lg:py-16 min-h-96'>
      <h3 className='text-2xl lg:text-5xl mb-2 lg:mb-4 font-bold tracking-wide text-pink'>Elegi tu plan</h3>
      <p className='text-lg mx-4 font-semibold tracking-wide text-pink'>Y desbloquea un sin fin de posibilidades</p>

      <div className='grid lg:grid-cols-3 justify-around mt-6 lg:mt-12 gap-12 mx-4 lg:mx-12'>
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
