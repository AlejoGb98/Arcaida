import React from 'react'
import { Link } from 'react-router-dom'

const Question = ({ques}) => {
    
    const {question, answer} = ques

  return (

    <div className='container py-4 lg:py-8 px-8 rounded-2xl font-light
    planCardGlass'>

        <p className='text-sm lg:text-xl mb-2 lg:mb-8 font-medium'>{question}</p>

        {
            answer.map((answ) => (
                answ === 'ML' ? 
                <p className='text-xs lg:text-base mb-2' key={answ}>Hace <span className='underline text-sky-600 font'><a href="https://www.mercadopago.com.ar/ayuda/dinero-seguridad-compras_283#:~:text=Protegemos%20la%20informaci%C3%B3n%20en%20el,y%20certifica%20lo%20que%20hacemos" target='_blank'>click aqui</a></span> y conoce la proteccion a compradores de Mercado</p>
                :
                <p className='text-xs lg:text-base mb-2' key={answ}>{answ}</p>
            ))

        }  

    </div>  
  )
}

export default Question
