import React from 'react'

const TyC = ({term}) => {
    
    const {title, points} = term

    
    
  return (
    <div className='container py-4 lg:py-8 px-8 rounded-2xl font-light
                     planCardGlass'>

        <p className='text-sm lg:text-xl mb-2 lg:mb-8 font-semibold'>{title}</p>
        
        {
            points.map((text)=> (
                <p className='text-xs lg:text-base mb-2' key={text} >{text}</p>      
            ))

        }  
      
    </div>
  )
}

export default TyC
