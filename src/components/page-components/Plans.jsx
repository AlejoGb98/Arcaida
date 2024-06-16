import React from 'react'

import plans from '../../plans'
import PlanCard from './PlanCard'

const Plans = () => {

    
  return (
    <div className='font-unbounded planGradient container mb-28 rounded-2xl text-center mx-auto py-16 min-h-96'>
      <h3 className='text-5xl mb-4 font-bold tracking-wide text-pink'>Elegi tu plan</h3>
      <p className='text-xl font-semibold tracking-wide text-pink'>Y desbloquea un sin fin de posibilidades</p>

      <div className='flex justify-around mt-12 gap-12 mx-12'>
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
