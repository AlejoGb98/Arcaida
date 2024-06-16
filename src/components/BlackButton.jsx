import React from 'react'
import { Link } from 'react-router-dom'

const BlackButton = ({text, extraClass, link}) => {
  return (
    <button className={`py-2 px-6 min-w-48 rounded-lg transition-all border-2 border-black
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
