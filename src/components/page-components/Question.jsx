import React from 'react'

const Question = ({ques}) => {
    
    const {question, answer} = ques

  return (

    <div className='container py-4 lg:py-8 px-8 rounded-2xl font-light
    planCardGlass'>

        <p className='text-sm lg:text-xl mb-2 lg:mb-8 font-medium'>{question}</p>

        {
            answer.map((answ) => (
                <p className='text-xs lg:text-base mb-2' key={answ}>{answ}</p>
            ))

        }  

    </div>  
  )
}

export default Question
