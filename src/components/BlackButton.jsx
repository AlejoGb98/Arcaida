import React from 'react'
import { Link } from 'react-router-dom'

const BlackButton = ({text, extraClass, link}) => {
  return (
    <button className={`py-1 font-ligth text-sm lg:text-lg lg:py-2 lg:px-6 min-w-28 px-2 md:px-4 lg:min-w-48 rounded-lg transition-all border-1 lg:border-2 border-black
                                hover:bg-black hover:text-slate-100 ${extraClass}`}>
            
            {
                link === 'https://arcaidasecondhand.com/' ?
                
                <a className='' target='_blank' href='https://arcaidasecondhand.com/'>
                    {text}
                </a>
                
                :
                
                <Link to={`${link}`}>
                    {text}
                </Link> 

            }
            
            
            
    </button>
  )
}

export default BlackButton
