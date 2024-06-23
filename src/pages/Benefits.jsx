import React from 'react'

import extendedPlans from '../extendedPlans'
import ExtendedPlanCard from '../components/page-components/ExtendedPlan'

const Benefits = () => {
  return (
    <section className='contentGlass container w-10/12 flex flex-col items-center font-poppins text-center py-8 lg:py-20 mb-12 lg:mb-24 px-6 lg:px-12'>
      <div className=' grid lg:grid-cols-2 justify-around mt-6 lg:mt-12 gap-4 mx-2 lg:mx-12'>
        {extendedPlans && extendedPlans.map((plan) => (
          
          <ExtendedPlanCard
            key={plan.id}
            plan={plan}
          />

        ))}
      </div>
    </section>
  )
}

export default Benefits
