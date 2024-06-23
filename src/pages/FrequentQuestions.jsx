import React from 'react'

import firstQuestions from '../fistCatQues'
import secondQuestions from '../secCatQues'
import thirdQuestions from '../thirdCatQues'
import fourQuestions from '../fourCatQues'
import Question from '../components/page-components/Question'

const FrequentQuestions = () => {

  return (
    <section>
      <div className='contentGlass container w-10/12 flex flex-col items-center font-poppins text-center py-8 lg:py-20 mb-12 lg:mb-24 px-6 lg:px-12'>
        <h1 className='text-xl lg:text-4xl mb-2 lg:mb-8 font-medium'>Iniciacion</h1>

        <div className='grid lg:grid-cols-2 justify-around mt-6 lg:mt-12 gap-4 lg:gap-12 mx-2 lg:mx-12'>
          {
            firstQuestions && firstQuestions.map((ques) => (
                <Question
                  key={ques.id}
                  ques={ques}
                />
            )) 
          }
        </div>

      </div>

      <div className='contentGlass container w-10/12 flex flex-col items-center font-poppins text-center py-8 lg:py-20 mb-12 lg:mb-24 px-6 lg:px-12'>
        <h1 className='text-xl lg:text-4xl mb-2 lg:mb-8 font-medium'>Beneficios de la Suscripcion</h1>

        <div className='grid lg:grid-cols-2 justify-around mt-6 lg:mt-12 gap-4 lg:gap-12 mx-2 lg:mx-12'>
          {
            secondQuestions && secondQuestions.map((ques) => (
                <Question
                  key={ques.id}
                  ques={ques}
                />
            )) 
          }
        </div>
      </div>

      <div className='contentGlass container w-10/12 flex flex-col items-center font-poppins text-center py-8 lg:py-20 mb-12 lg:mb-24 px-6 lg:px-12'>
        <h1 className='text-xl lg:text-4xl mb-2 lg:mb-8 font-medium'>Politicas y Procedimientos</h1>

        <div className='grid lg:grid-cols-2 justify-around mt-6 lg:mt-12 gap-4 lg:gap-12 mx-2 lg:mx-12'>
          {
            thirdQuestions && thirdQuestions.map((ques) => (
                <Question
                  key={ques.id}
                  ques={ques}
                />
            )) 
          }
        </div>
      </div>

      <div className='contentGlass container w-10/12 flex flex-col items-center font-poppins text-center py-8 lg:py-20 mb-12 lg:mb-24 px-6 lg:px-12'>
        <h1 className='text-xl lg:text-4xl mb-2 lg:mb-8 font-medium'>Incentivos y Programas</h1>

        <div className='grid lg:grid-cols-2 justify-around mt-6 lg:mt-12 gap-4 lg:gap-12 mx-2 lg:mx-12'>
          {
            fourQuestions && fourQuestions.map((ques) => (
                <Question
                  key={ques.id}
                  ques={ques}
                />
            )) 
          }
        </div>
      </div>

    </section>
  )
}

export default FrequentQuestions
